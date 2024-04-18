import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images/";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-5 fixed z-50 w-full bg-header backdrop-blur-md">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" className="h-5" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-sm text-gray-300">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-sm leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 text-gray-300">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
