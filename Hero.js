import me from "../img/me.jpg";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="brief">
        <div>
          <h1>
            <span className="im">I'm</span>
          </h1>
          <h2>John Jane Doe</h2>
          <p>A passionate Frontend Developer having an experience of building Web applications with 
            HTML5 / CSS3 / JavaScript / and still learning new stuff.
          </p>
        </div>
        <a href="#projects"><button className="cta">View My Projects</button></a>
      </div>
      <figure>
        <img src={me} alt="John Jane" width={100}  />
      </figure>
    </section>
  );
}

export default Hero;
