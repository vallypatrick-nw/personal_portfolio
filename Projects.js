import html_css from '../img/html_css.jpg'
import js from '../img/js.jpg'
import react from '../img/react.png'
import mysql from '../img/mysql.png'
import linux from '../img/linux.png'
import git from '../img/git.png'
import studentsapp from '../img/studentsapp.jpg'
import weatherapp from '../img/weatherapp.jpg'

function Projects() {
  return (
    <section className="projects" id="projects">
        <h2 className="workedwith">Tech Stack & Skills</h2>
        <div className="worked">
            <img src={html_css} alt="HTML & CSS" width={100} />
            <img src={js} alt="JavaScript" width={100} />
            <img src={react} alt="React" width={100} />
            <img src={mysql} alt="MYSQL" width={100} />
            <img src={linux} alt="Linux" width={100} />
            <img src={git} alt="GitHub" width={100} />
        </div>
        <h1 className="headings">Projects</h1>
        <article>
            <figure>
                <div className="worked">
                    <img src={studentsapp} alt="student's app" width={350} />
                </div>
            </figure>
            <div>
                <h2>Personal Portfolio</h2>
                <p>lorem20</p>
                <h3>Technologies</h3>
                <ul>
                    <li>HTML5 & CSS3</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
            </div>
        </article>
        <article>
        <div>
                <h2>Product/Item Search</h2>
                <p>lorem20</p>
                <h3>Technologies</h3>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <figure>
                <div className="worked">
                    <img src={weatherapp} alt="weather app" width={350} />
                </div>
            </figure>
        </article>
        <div className='btn-center'><button className="cta-outline black">See More Work</button></div>
    </section>
    
  )
}

export default Projects