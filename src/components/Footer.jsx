import { FaDiscord, FaGithub, FaTwitch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const links = [
  { href: "#", icon: <FaDiscord size={32} /> },
  { href: "#", icon: <FaXTwitter size={32} /> },
  { href: "#", icon: <FaGithub size={32} /> },
  { href: "#", icon: <FaTwitch size={32} /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black px-10 flex flex-col">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <div>
          <h1 className="special-font font-zentry tracking-wide text-7xl text-blue-50">
            z<b>e</b>ntry
          </h1>
          <p className="text-center text-sm md:text-left">
            &copy; Nova 2024, All rights reserved
          </p>
        </div>
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link, i) => {
            return (
              <a
                key={i + link}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black transition-colors duration-500 ease-in-out hover:text-white border border-blue-50 hover:border-black p-3 rounded-full bg-blue-50 hover:bg-transparent"
              >
                {link.icon}
              </a>
            );
          })}
        </div>
        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
