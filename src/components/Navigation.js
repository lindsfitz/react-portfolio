import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Navigation() {
    let navigate = useNavigate();
    return (


        <nav>
            <div>
                <div>
                    Lindsay Fitzgerald
                    <div style={{fontSize:'1vw'}}>FULL-STACK WEB DEV</div>
                </div>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="/"
                            onClick={() => navigate('/')}
                        >
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href=""
                            onClick={() => navigate('projects')}
                        >
                            PROJECTS
                        </a>
                    </li>
                    <li>
                        <a href=""
                            onClick={() => navigate('contact')}
                        >
                            CONTACT ME
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}