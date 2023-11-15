import LeftArrow from "../../assets/LeftArrow.svg";
import RightArrow from "../../assets/RightArrow.svg";
import styles from "./styles.module.scss";
const Calendar = () => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const dates = ["20", "21", "22", "23", "24", "25", "26"];
  return (
    <div className={styles.calendar}>
      <div className={styles.calendar_header}>
        <img src={LeftArrow} alt="LeftArrow" />
        <div className={styles.month}>April 2022</div>
        <img src={RightArrow} alt="RightArrow" />
      </div>
      <div className={styles.days_container}>
        {days.map((day: string) => (
          <div className={styles.day}>{day}</div>
        ))}
      </div>
      <div className={styles.days_container}>
        {dates.map((date: string) => (
          <div
            className={styles.date}
            style={{ backgroundColor: date == "24" ? "#FF643B" : "" }}
          >
            <div
              className={styles.text}
              style={{ color: date == "24" ? "white" : "" }}
            >
              {date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Calendar };
