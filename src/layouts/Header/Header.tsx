import Avatar from "../../assets/Avatar.svg";
import Allerts from "../../assets/Allerts.svg";
import styles from "./styles.module.scss";
const Header = ({ title }: { title: string }) => {
  return (
    <div className={styles.header}>
      <img src={Avatar} alt="Avatar" />
      <div className={styles.page_title}>{title}</div>
      <img src={Allerts} alt="Allerts" />
    </div>
  );
};

export { Header };
