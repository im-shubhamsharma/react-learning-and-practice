import image from "./react-logo.png";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <img src={image} className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
