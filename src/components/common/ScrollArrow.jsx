import { useEffect, useState } from "react";

function ScrollArrow() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <a
            href="#for-arrow"
            id="scrollArrow"
            style={{ display: isVisible ? 'block' : 'none' }}
            onClick={scrollToTop}
        >
            <i className="fas fa-arrow-up"></i>
        </a>
    )
}

export default ScrollArrow