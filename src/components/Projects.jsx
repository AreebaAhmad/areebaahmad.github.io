import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Project One',
            description: 'A website template designed to buy furniture online.',
            link: '/project1/furniture-website.html',
            image: project1
        },
        {
            id: 2,
            title: 'Project Two',
            description: 'A website template designed to get information about renting apartments.',
            link: '/project2/renting-apartment-website.html',
            image: project2
        },
        {
            id: 3,
            title: 'Project Three',
            description: 'Gradient Effect Form.',
            link: '/project3/index.html',
            image: project3
        },
    ]

    return (
            <div  id="projects" className=" container bg-dark bg-opacity-50 rounded-4 p-5 shadow-lg mt-5">
                <h1 className="fw-bold mb-4">Projects</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {projects.map((project) => (
                        <div className="col" key={project.id}>
                            <a href={project.link} target="_blank" rel="noreferrer" className="text-decoration-none">
                                <div className="card bg-dark bg-opacity-75 border-0 shadow h-100">
                                    {project.image && (
                                        <img src={project.image} className="card-img-top" alt={project.title} style={{ height: '200px', objectFit: 'cover' }} />
                                    )}
                                    <div className="card-body p-4">
                                        <h5 className="card-title fw-bold text-white">{project.title}</h5>
                                        <p className="card-text text-white-50">{project.description}</p>
                                        <span className="btn btn-outline-light btn-sm mt-2">View Project →</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
       
    )
}

export default Projects