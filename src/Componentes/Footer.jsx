import '../CSS/Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section footer-contact">
                    <h3>Contacto</h3>
                    <p><i className="fas fa-phone"></i>+502 5571-4486</p>
                    <p><i className="fas fa-envelope"></i> <a href="mailto:info@example.com">joshuacorzo7@gmail.com</a></p>
                   
                </div>

                <div className="footer-socials">
                    <a href="https://www.facebook.com/share/M8gMQ6jLFurSgdXX/?mibextid=qi2Omg" target="_blank" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/joshua_elijhab?utm_source=qr&igsh=YnJjZ2I5bzRxa3Bi" target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/joshua-rosselin-b5b9382b5" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                </div>

            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Joshua Rosselin Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};
