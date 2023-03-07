import ProjectUX from '../Components/Projectux-Card';
import masarte from '../Img/uxproj/masarte.png';

function Projectsux() {
  return (
    <div className="h-full p-4 flex flex-col items-center">
      <div className="my-1.5">
        <h1 className="text-orange-600 text-3xl sm:text-lg md:text-xl  font-bold ">
          UX Design Projects
        </h1>
      </div>
      <div className="projects-container mt-4 w-3/5 sm:w-full md:w-full">
        <ProjectUX
          name="+Arte: Gallery"
          url={masarte}
          role="UX Researcher, UX | UI Designer"
          description="Design process for a ficticial Art Gallery in Oaxaca, México"
          live="https://masarte-galeria.netlify.app/"
          info="https://docs.google.com/presentation/d/1hR-Tup1Hrne48m_zvx_fmBD4lIMgCQemovoGoa6h_kw/edit?usp=sharing"
        />
      </div>
    </div>
  );
}

export default Projectsux;
