import calc from '../assets/images/calc.jpg'
import '../styles/projects.css'
const Projects = () => {
    return(
        <>
            <h2 id="title">Projects</h2>
            <div className="projects">
                <div className="content">
                    <div className="desc">
                        <a href="#">
                            <p>Calculator</p>
                            <img src={calc} alt="calcu" />
                        </a>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Projects;