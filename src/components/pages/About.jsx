const details = [
    { label: "Name:", value: "Jasphin Vijay J" },
    { label: "Date of Birth:", value: "03-10-2002" },
    { label: "Experience:", value: "6-month training @ Besant Technologies" },
    { label: "Education:", value: "B.Tech - Information Technology" },
    { label: "Certifications:", value: "Java Full-Stack Development - Besant Technologies" },
    { label: "Languages:", value: "English, Tamil" },
    {
        label: "GitHub:",
        value: <a href="https://github.com/JasphinVijayJ" target="_blank" rel="noopener noreferrer">View GitHub</a>,
        className: "link-item"
    },
    {
        label: "LinkedIn:",
        value: <a href="https://www.linkedin.com/in/jasphin-vijay" target="_blank" rel="noopener noreferrer">View LinkedIn</a>,
        className: "link-item"
    }
];

function About() {
    return (
        <section id="about-section">
            <h2 className="heading-h2">About <span className="gradient-color">Me</span></h2>

            <div className="about-content">
                <p>As a Java Full Stack Developer, I specialize in building high-performance web applications with
                    end-to-end
                    solutions using Spring Boot for reliable backend services and React for responsive frontend interfaces.
                    During
                    my 6-month training at Besant Technologies, I developed strong skills in Java, Spring Boot, and React,
                    along with
                    RESTful API development, applying industry best practices to deliver scalable, enterprise-grade
                    solutions.</p>

                <div className="about-details">

                    {details.map((detail, index) => (
                        <div key={index} className={`detail-item ${detail.className || ''}`}>
                            <span>{detail.label}</span>
                            <p>{detail.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About