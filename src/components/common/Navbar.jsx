import { useState } from "react";

const navItems = [
    { href: "#", label: "Home" },
    { href: "#about-section", label: "About" },
    { href: "#education-section", label: "Education" },
    { href: "#skills-section", label: "Skills" },
    { href: "#projects-section", label: "Project" },
    { href: "#contact-section", label: "Contact" }
];

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState("#");

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (href) => {
        setActiveNav(href);
        setIsMenuOpen(false);   // Close menu when link is clicked
    };

    return (
        <header id="for-arrow">
            <a href="" className="logo">Explore <span className="gradient-color">My Portfolio</span></a>

            <div className="menu" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <nav className={`navbar ${isMenuOpen ? 'show' : ''}`} >

                {navItems.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className={activeNav === item.href ? "gradient-color" : ""}
                        onClick={() => handleNavClick(item.href)}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </header>
    )
}

export default Navbar