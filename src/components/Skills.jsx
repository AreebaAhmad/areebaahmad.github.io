function Skills () {
    const skills = [
        { name: 'HTML', icon: 'devicon-html5-plain colored' },
        { name: 'CSS', icon: 'devicon-css3-plain colored' },
        { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
        { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'React', icon: 'devicon-react-original colored' },
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'Java', icon: 'devicon-java-plain colored' },
        { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
        { name: 'RESTful APIs', icon: 'devicon-fastapi-plain colored' },
        { name: 'GitLab', icon: 'devicon-gitlab-plain colored' },
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'GitHub', icon: 'devicon-github-original colored' },
        { name: 'TDD', icon: 'devicon-junit-plain colored' }
    ]
    return (
        <div id="skills" className="container bg-dark bg-opacity-50 rounded-4 p-5 shadow-lg mt-5">
            <h1 className="fw-bold mb-4">Skills</h1>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-3">
                {skills.map((skill) => (
                    <div className="col" key={skill.name}>
                        <div className="card border-0 shadow-sm text-center p-3 h-100 d-flex flex-column align-items-center justify-content-center">
                            <i className={`${skill.icon} fs-1 mb-2`}></i>
                            <p className="mb-0 fw-bold skills">{skill.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Skills