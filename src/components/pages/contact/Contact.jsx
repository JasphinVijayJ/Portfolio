import ContactForm from "./ContactForm";

const contactInfo = [
    {
        icon: "fas fa-envelope",
        title: "Email",
        content: "jasphinvijayj@gmail.com"
    },
    {
        icon: "fas fa-phone-alt",
        title: "Phone",
        content: "+91 7339372547"
    },
    {
        icon: "fas fa-map-marker-alt",
        title: "Location",
        content: "Chennai, Tamil Nadu, India"
    }
];

function Contact() {
    return (
        <section id="contact-section">
            <h2 className="heading-h2">Get In <span className="gradient-color">Touch</span></h2>

            <div className="contact-container">
                {/* Contact Info */}
                <div className="contact-info">

                    {contactInfo.map((item, index) => (
                        <div key={index} className="contact-item">
                            <i className={item.icon}></i>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Form */}
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact