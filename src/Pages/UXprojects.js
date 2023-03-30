import ProjectUX from '../Components/Projectux-Card';
import masarte from '../Img/uxproj/masarte.png';
import recetario from '../Img/uxproj/recetario.png';
import jardines from '../Img/uxproj/losjardines.png';

function Projectsux() {
  return (
    <div className="h-full p-4 flex flex-col items-center">
      <div className="inline-block my-10">
        <h1 className="font-bold text-orange-600 text-3xl sm:text-lg md:text-xl">
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
        <ProjectUX
          name="El Recetario"
          url={recetario}
          role="UX Researcher, UX | UI Designer"
          description="Design process for a ficticial Cooking tutorials Web page/app"
          live="https://elrecetario-ux.netlify.app/"
          info="https://docs.google.com/presentation/d/1rUXwyw6vEx0slD_wADCwamXAqDN2zUVZ9sY2QfVXtP4/edit?usp=sharing"
        />
        <ProjectUX
          name="Los Jardines"
          url={jardines}
          role="UX Researcher, UX | UI Designer"
          description="Design process for a social/urban project, in Puebla, México"
          live="https://losjardines-ux.netlify.app/"
          info="https://docs.google.com/presentation/d/1UZ9LgCGB0pvNNmez5aXjTRzupm1CWbzY1v2hTFnnxZ4/edit?usp=sharing"
        />
      </div>
    </div>
  );
}

export default Projectsux;
