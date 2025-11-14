
function Footer() {
    return (
        <footer className="footer-section">
            {/* Social Media Links */}
            <div className="social-links">
                <a href="https://github.com/JasphinVijayJ" target="_blank" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                </a>

                <a href="https://www.linkedin.com/in/jasphin-vijay" target="_blank" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                </a>

                <a href="https://www.instagram.com/vijay_3_10_2002?igsh=MWNtY2VuZG1pcXNhdA==" target="_blank"
                    aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                </a>

                <a href="mailto:jasphinvijayj@gmail.com" aria-label="Email">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>

            {/* Copyright */}
            <p className="copyright">&copy; {new Date().getFullYear()} Designed & Developed By <b className="gradient-color">Jasphin Vijay J</b></p>
        </footer>
    )
}

export default Footer