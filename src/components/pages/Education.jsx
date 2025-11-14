const educationData = [
    {
        degree: "Bachelor of Technology - Information Technology",
        year: "2020 - 2024",
        institution: "Agni College of Technology",
        location: "Chennai, Tamil Nadu",
        grade: "CGPA: 7.8/10"
    },
    {
        degree: "Higher Secondary Certificate (12th Grade)",
        year: "2020",
        institution: "Oxford Matric Higher Secondary School",
        location: "Kanyakumari, Tamil Nadu",
        grade: "Percentage: 57%"
    },
    {
        degree: "Secondary School Certificate (10th Grade)",
        year: "2018",
        institution: "Bethlahem Matric Higher Secondary School",
        location: "Kanyakumari, Tamil Nadu",
        grade: "Percentage: 66%"
    }
];

function Education() {
    return (
        <section id="education-section">
            <h2 className="heading-h2">My <span className="gradient-color">Education</span></h2>

            <div className="education-container">

                {educationData.map((edu, index) => (
                    <div key={index} className="education-item">
                        <div className="education-header">
                            <h3>{edu.degree}</h3>
                            <span className="education-year">{edu.year}</span>
                        </div>

                        <div className="education-details">
                            <h4>{edu.institution}</h4>
                            <p className="education-location">{edu.location}</p>
                            <p>{edu.grade}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Education