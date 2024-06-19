import Github from "../assets/github-square-brands.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer--copyright">
        <p>&copy; {new Date().getFullYear()} AAYAM. All rights reserved.</p>
      </div>
      <a className="footer--links" href="https://github.com/Maxwell999b" target="_blank" rel="noreferrer">
        <img className="footer--links__icon" src={Github} alt="Github" />
      </a>
    </footer>
  );
}
