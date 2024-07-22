import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

export default function PageNav() {
  const menu = [
    { name: "List your travel", link: "/product" },
    { name: "Support", link: "/pricing" },
    { name: "Sign in", link: "/login" },
  ];
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        {menu.map((item, index) => (
          <NavLink to={item.link} key={index} className={styles.ctaLink}>
            {item.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
