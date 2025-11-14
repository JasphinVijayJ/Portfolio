import onlineBankingImg from '../../assets/project/online-banking.webp'
import studentMgmtImg from '../../assets/project/student-management.png'
import petAdoptionImg from '../../assets/project/pet-adoption.jpg'
import todoAppImg from '../../assets/project/todo-app.png'
import userAuthImg from '../../assets/project/user-auth-system.jpg'

export const projectsData = [
    {
        id: 5,
        title: "User Authentication System",
        image: userAuthImg,
        alt: "User Authentication System",
        description: "A full-stack authentication system with role-based access (User & Admin), JWT token security, form validation, and protected routes. Built with React frontend and Spring Boot backend.",
        technologies: ["React.js", "Spring Boot", "JWT Authentication", "MySQL", "Role-Based Access"],
        links: [
            {
                type: "demo",
                url: "https://jasphinvijayj.github.io/UserAuthSystem-React/login",
                icon: "fa-solid fa-external-link-alt",
                text: "Live Demo"
            },
            {
                type: "code",
                url: "https://github.com/JasphinVijayJ/UserAuthSystem-React",
                icon: "fa-brands fa-github",
                text: "Code"
            }
        ]
    },
    {
        id: 4,
        title: "Pet Adoption Website",
        image: petAdoptionImg,
        alt: "Pet Adoption Website",
        description: "Developed a responsive website to connect adoptable pets with owners. Included pet listings, adoption forms, and contact pages with a focus on clean, mobile-friendly design.",
        technologies: ["React.js", "React Router", "React Hooks", "Form & Validation", "Responsive Design"],
        links: [
            {
                type: "demo",
                url: "https://jasphinvijayj.github.io/Pet-Adoption-React/",
                icon: "fa-solid fa-external-link-alt",
                text: "Live Demo"
            },
            {
                type: "code",
                url: "https://github.com/JasphinVijayJ/Pet-Adoption-React",
                icon: "fa-brands fa-github",
                text: "Code"
            }
        ]
    },
    {
        id: 3,
        title: "Online Banking System",
        image: onlineBankingImg,
        alt: "Online Banking System",
        description: "Implemented user registration, account operations (deposits, withdrawals, transfers), and transaction history tracking. Developed RESTful APIs tested with Postman.",
        technologies: ["Java", "Spring Boot", "REST API", "MySQL", "Postman"],
        links: [
            {
                type: "code",
                url: "https://github.com/JasphinVijayJ/Online-Banking-System",
                icon: "fa-brands fa-github",
                text: "Code"
            }
        ]
    },
    {
        id: 2,
        title: "Student Management System",
        image: studentMgmtImg,
        alt: "Student Management System",
        description: "CRUD-based system with JDBC integration for secure database operations. Features include student registration, record management, and responsive UI.",
        technologies: ["Java", "Servlets", "JSP", "HTML5/CSS3", "JDBC", "MySQL", "Apache Tomcat", "CRUD"],
        links: [
            {
                type: "code",
                url: "https://github.com/JasphinVijayJ/Student_Record_Management_System",
                icon: "fa-brands fa-github",
                text: "Code"
            }
        ]
    },
    {
        id: 1,
        title: "ToDo-App",
        image: todoAppImg,
        alt: "ToDo-App Website",
        description: "Built an interactive To-Do app to add, edit, delete, and mark tasks Completed or Pending. Designed with a clean interface and separate CSS styling for readability and maintenance.",
        technologies: ["HTML5/CSS3", "JavaScript", "DOM Manipulation", "Event Handling", "Responsive Design"],
        links: [
            {
                type: "demo",
                url: "https://jasphinvijayj.github.io/ToDo-App/",
                icon: "fa-solid fa-external-link-alt",
                text: "Live Demo"
            },
            {
                type: "code",
                url: "https://github.com/JasphinVijayJ/ToDo-App",
                icon: "fa-brands fa-github",
                text: "Code"
            }
        ]
    },
];