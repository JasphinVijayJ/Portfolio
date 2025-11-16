const details = [
    { label: "Name:", value: "Jasphin Vijay J" },
    { label: "Date of Birth:", value: "03-10-2002" },
    { label: "Experience:", value: "6-month training @ Besant Technologies" },
    { label: "Education:", value: "B.Tech - Information Technology" },
    { label: "Certifications:", value: "Java Full-Stack Development - Besant Technologies" },
    { label: "Relocation:", value: "Open to opportunities across India and abroad" },
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
                <p>
                    As a Java Full-Stack Developer, I have hands-on experience in building scalable web applications using
                    Spring Boot and React. During my 6-month training at Besant Technologies, I worked on real-time projects
                    involving REST APIs, authentication systems, database integration, and responsive UI development.
                    I focus on writing clean, maintainable code and building applications that are efficient, secure, and user-friendly.
                </p>

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