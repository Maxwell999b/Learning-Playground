import Photo from "../assets/Pic-main5.jpg";
import LinkedIn from "../assets/linkedin-brands.svg";
import Whatsapp from "../assets/brand-whatsapp.svg";

export default function Info() {
  return (
    <main className="info">
      <img className="info--photo" src={Photo} alt="Abdulrahman Ahmed" />
      <h1 className="info--name">Abdulrahman Ahmed</h1>
      <h2 className="info--position">Frontend Developer</h2>

      <a
        className="info--website"
        href="https://maxwell999b.github.io/Front-End-Portfolio/"
        target="_blank"
        rel="noreferrer">
        <p className="info--website__text">A A Y A M @Portfolio</p>
      </a>

      <div className="info--connect">
        <a className="info--connect__email" href="https://api.whatsapp.com/send?phone=201005059834">
          <img className="info--connect__email__icon" src={Whatsapp} alt="Email" />
          <span>Whatsapp</span>
        </a>

        <a
          className="info--connect__linkedin"
          href="https://www.linkedin.com/in/maxwell999b/"
          target="_blank"
          rel="noreferrer">
          <img className="info--connect__linkedin__icon" src={LinkedIn} alt="Linkedin" />
          <span>LinkedIn</span>
        </a>
      </div>
    </main>
  );
}
