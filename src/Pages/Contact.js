import './Contact.css';
import ContactUs from '../Components/ContactForm';

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <ContactUs />
      <div>
        <a
          href="https://www.linkedin.com/in/juan-carlos-montes-pesquera-747271242/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="Linkedin"
            height="80px"
          />
        </a>
        <a href="https://github.com/JCMP92" target="_blank" rel="noreferrer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="Github"
            height="80px"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
