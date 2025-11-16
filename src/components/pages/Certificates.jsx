import { useEffect, useState } from 'react';

import spring from '../../assets/certificate/spring-boot-guvi-certification.png';
import java from '../../assets/certificate/java-certification-course.jpg';
import sql from '../../assets/certificate/introduction-to-sql.jpg';

const certificates = [
    { id: 1, image: spring, alt: 'Spring Boot Certificate' },
    { id: 2, image: java, alt: 'Java Full-Stack Certificate' },
    { id: 3, image: sql, alt: 'One More Certificate' },
];

function Certificates() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => prev + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === certificates.length - 1 ? 0 : prev + 1
            );
        }, 5000);   // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id='certificate-section'>
            <h2 className='heading-h2'>My <span className='gradient-color'>Certificates</span></h2>

            <div className='certificate-container'>
                <button className='prev-next-btn' onClick={prevSlide} disabled={currentIndex === 0}>
                    <i className="fa-solid fa-less-than"></i>
                </button>

                <div className='certificate-item'>
                    <img
                        src={certificates[currentIndex].image}
                        alt={certificates[currentIndex].alt}
                    />
                </div>

                <button className='prev-next-btn' onClick={nextSlide} disabled={currentIndex === certificates.length - 1}>
                    <i className="fa-solid fa-greater-than"></i>
                </button>
            </div>
        </section>
    )
}

export default Certificates