import React from 'react';


export default function Project(props) {

    const content = props.projects.map((project) =>
        <div className='proj-container' key={project.key}>
            <div className='proj-img'>
                <img src={project.mockup} alt='project-example' />
            </div>
            <div className='proj-content'>
                {project.content}
            </div>
        </div>)
    return (

        <div id='portfolio'>
            <h2>PROJECTS</h2>
            <div id='portfolio-container'>
                {content}
            </div>
        </div>

    )

}