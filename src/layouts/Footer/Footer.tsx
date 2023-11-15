import Add from "../../assets/Add.svg";
import Calendar from "../../assets/Calendar.svg";
import Expenses from "../../assets/Expenses.svg";
import ActiveExpenses from "../../assets/ActiveExpenses.svg";
import Home from "../../assets/Home.svg";
import ActiveHome from "../../assets/ActiveHome.svg";
import Settings from "../../assets/Settings.svg";

import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  const isExpensesActive = window.location.href.includes("expenses");
  return (
    <div className={styles.footer}>
      <Link className={styles.link} to="/">
        <img src={isExpensesActive ? Home : ActiveHome} alt="Home" />
      </Link>
      <Link to="/expenses">
        <img
          src={isExpensesActive ? ActiveExpenses : Expenses}
          alt="Expenses"
        />
      </Link>
      <Link to="">
        <img src={Add} alt="Add" />
      </Link>
      <Link to="">
        <img src={Calendar} alt="Calendar" />
      </Link>
      <Link to="">
        <img src={Settings} alt="Settings" />
      </Link>
    </div>
  );
};

export { Footer };
