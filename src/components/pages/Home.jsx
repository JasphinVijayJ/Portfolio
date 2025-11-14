import resumePDF from '../../assets/resume.pdf'

function Home() {
    return (
        <section className="home-section">
            <div className="home-content">
                <h1>Jasphin Vijay J</h1>
                <br />
                <h3 className="gradient-color">Java Full-Stack Developer</h3>
                <p>6-month Training @ Besant Technologies | Spring Boot | React | MySQL</p>

                <a href={resumePDF} target="_blank">View Resume</a>
            </div>

            <div className="image"></div>
        </section>
    )
}

export default Home