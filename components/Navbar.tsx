import style from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <>
      <nav className={style["menu-componen"]}>
        {menuItems.map((el) => (
          <ActiveLink text={el.text} href={el.href} key={el.href} />
        ))}
      </nav>
    </>
  );
};
