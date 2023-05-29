import me from '../img/me.jpg'

function About() {
  return (
    <section className="aboutMe" id="about">
        <main>
            <figure>
                <img src={me} alt="John Jane" width={300} />
            </figure>
            <div>
                <h2>ABOUT ME</h2>
                <h1 id="who-am-i">WHO AM I</h1>
                <p>A passionate Frontend Developer having an experience of building Web applications with 
                    Html / Css / JavaScript / and still learning new stuff.
                </p>
                <div>
                    <button className="cta-black-filled"><a href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer">Hire Me</a></button>
                    <br />
                    <button className="cta-outline-black">See My Resume</button>
                </div>
            </div>
        </main>
    </section>
  )
}

export default About