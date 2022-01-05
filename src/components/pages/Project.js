import React from 'react';


export default function Project(props) {

        const content = props.projects.map((project) =>
        <div className='uk-width-auto'>
            <div className="uk-card uk-card-hover uk-margin">
                <div className="uk-card-media-top">
                    <img src={project.mockup} alt='' />
                </div>
                <div className="uk-card-body">
                    {project.content}
                </div>
            </div>

        </div>)
    return (

        <div className="uk-container-expand">
            <h6 className="uk-text-meta uk-text-center">PROJECTS</h6>
            <div className="uk-flex uk-flex-column uk-flex-around uk-text-center">

                <div className='uk-flex uk-flex-around uk-flex-wrap'>
                    {content}
                </div>
            </div>
        </div>

    )

}