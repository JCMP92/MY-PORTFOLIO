function Project(props) {
  return (
    <div className="projects-card">
      <div className="project-info">
        <img src={props.url} alt={props.name} height="200px" />
        <div className="proj-description">
          <h2>{props.name}</h2>
          <h3>Built with: {props.built}</h3>
          <p>{props.description}</p>
        </div>
      </div>
      <div>
        <a href={props.live} target="blank">
          Live version
        </a>
        <a href={props.repo} target="blank">
          Repository
        </a>
      </div>
    </div>
  );
}

export default Project;
