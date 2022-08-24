import ContactUs from '../Components/ContactForm';

function Contact() {
  return (
    <div className="h-5/6  sm:p-2 p-4 flex flex-col items-center justify-evenly">
      <div className="my-1.5">
        <h1 className="text-orange-600 text-3xl sm:text-lg md:text-xl  font-bold ">
          Contact Page
        </h1>
      </div>
      <ContactUs />
      <div className="flex">
        <a
          href="https://www.linkedin.com/in/juan-carlos-montes-pesquera-747271242/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="Linkedin"
            className="h-12 sm:h-6  mx-5"
          />
        </a>
        <a href="https://github.com/JCMP92" target="_blank" rel="noreferrer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="Github"
            className="h-12 sm:h-6 mx-5"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
