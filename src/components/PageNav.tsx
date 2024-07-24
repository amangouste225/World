import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";
import { useAuth } from "../context/FakeAuth";

export default function PageNav() {
  const menu = [
    { name: "List your travel", link: "/product" },
    { name: "Support", link: "/pricing" },
    { name: "Sign in", link: "/login" },
  ];

  const { isAuthenticated } = useAuth();
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        {menu.map((item, index) => (
          <NavLink to={item.link} key={index} className={styles.ctaLink}>
            {isAuthenticated
              ? item.name === "Sign in"
                ? "Go to App"
                : item.name
              : item.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
