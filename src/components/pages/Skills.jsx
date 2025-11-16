const skillsData = [
    {
        title: "Frontend",
        icon: "fa-solid fa-laptop-code",
        skills: ["HTML5/CSS3", "JavaScript", "React.js", "React Hooks", "React Router", "Responsive Web Design"]
    },
    {
        title: "Backend",
        icon: "fa-solid fa-server",
        skills: ["Java", "Spring Boot", "REST API", "Servlets & JSP", "Spring MVC", "JWT Authentication"]
    },
    {
        title: "Database & Tools",
        icon: "fa-solid fa-database",
        skills: ["MySQL", "SQL (Joins, Indexing)", "Postman", "Git/GitHub", "Spring Tool Suite (STS)", "Maven"]
    }
];

function Skills() {
    return (
        <section id="skills-section">
            <h2 className="heading-h2">My <span className="gradient-color">Technical Skills</span></h2>

            <div className="skills-container">

                {skillsData.map((category, index) => (
                    <div key={index} className="skills-category">
                        <h3><i className={category.icon}></i> {category.title}</h3>

                        <ul className="skills-list">
                            {category.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills