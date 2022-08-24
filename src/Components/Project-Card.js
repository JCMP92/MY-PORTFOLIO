function Project(props) {
  return (
    <div className="projects-card mx-4 mb-14 shadow-2xl">
      <div className="project-info">
        <img src={props.url} alt={props.name} className="mb-2" />
        <div className="proj-description p-1">
          <h2 className="font-bold text-orange-600">{props.name}</h2>
          <h3 className="font-bold">Built with: {props.built}</h3>
          <p className="font-normal p-2">{props.description}</p>
        </div>
      </div>
      <div className="flex justify-evenly items-center bg-zinc-800 h-10">
        <a
          href={props.live}
          target="blank"
          className="text-slate-200 hover:text-orange-600"
        >
          Live version
        </a>
        <a
          href={props.repo}
          target="blank"
          className="text-slate-200 hover:text-orange-600"
        >
          Repository
        </a>
      </div>
    </div>
  );
}

export default Project;
