import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onclick: (e: React.SyntheticEvent<EventTarget>) => void;
  type: "primary" | "back" | "position";
};

export default function Button({ children, onclick, type }: ButtonProps) {
  return (
    <button onClick={onclick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}
