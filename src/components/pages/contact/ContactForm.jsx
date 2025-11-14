import { useState } from "react"
import PopupAlert from "./PopupAlert";

// Email regex pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [popupBox, setPopupBox] = useState({ show: false, message: "", type: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData, [name]: value,
        }));

        // Clear error for this field if user starts typing
        setErrors((prevErrors) => ({
            ...prevErrors, [name]: ""
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";

        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!emailPattern.test(formData.email))
            newErrors.email = "Enter a valid email address";

        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

        return newErrors;
    };

    const popupBoxMessage = (message, type) => {
        setPopupBox({ show: true, message, type });

        // Auto hide after 2 seconds
        setTimeout(() => {
            setPopupBox({ show: false, message: "", type: "" })
        }, 2000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});  // Clears any previous errors
        setIsSubmitting(true);  // show loading (Sending...)

        try {
            const data = new FormData();
            data.append("access_key", "d41735d1-af9e-4fb1-8d0f-3071e1c3c87e");
            data.append("name", formData.name.trim());
            data.append("email", formData.email.trim());
            data.append("subject", formData.subject.trim());
            data.append("message", formData.message.trim());

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data
            });

            if (response.ok) {
                popupBoxMessage("Form submitted successfully!", "success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                popupBoxMessage("Oops! Something went wrong. Please try again.", "error");
            }
        } catch (error) {
            console.log(error);
            popupBoxMessage("Network error. Please check your connection.", "error")
        } finally {
            setIsSubmitting(false);  // reset loading state (Sending...)
        }
    };

    return (
        <>
            {/* Popup Alert Component */}
            <PopupAlert show={popupBox.show} message={popupBox.message} type={popupBox.type} />

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                        <small className="error-message">{errors.name}</small>
                    </div>

                    <div className="form-group">
                        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                        <small className="error-message">{errors.email}</small>
                    </div>
                </div>

                <div className="form-group">
                    <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                    <small className="error-message">{errors.subject}</small>
                </div>

                <div className="form-group">
                    <textarea rows="5" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
                    <small className="error-message">{errors.message}</small>
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send Message"}</button>
            </form>
        </>
    )
}

export default ContactForm