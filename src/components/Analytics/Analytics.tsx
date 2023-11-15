import styles from "./styles.module.scss";
import ArrowDown from "../../assets/ArrowDown.svg";
const Analytics = () => {
  const data = [
    { sum: 2345, month: "Jan" },
    { sum: 3345, month: "Feb" },
    { sum: 5545, month: "Mar" },
    { sum: 6345, month: "Apr" },
    { sum: 4345, month: "May" },
    { sum: 6045, month: "Jun" },
    { sum: 2145, month: "Jul" },
  ];
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>Analytics</div>
        <div className={styles.year_select}>
          <div className={styles.year}>Year - 2022</div>
          <img src={ArrowDown} alt="ArrowDown" />
        </div>
      </div>
      <div className={styles.statystic_row}>
        {data.map((column: any) => (
          <div className={styles.column_container}>
            <div
              className={styles.sum}
              style={{
                color: column.sum == 6345 ? "#8234F8" : "#a3a3a3",
              }}
            >
              ${column.sum}
            </div>
            <div
              className={styles.column}
              style={{
                height: column.sum / 50,
                backgroundColor: column.sum == 6345 ? "#8234F8" : "f3f3f3",
              }}
            ></div>
            <div className={styles.month}>{column.month}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Analytics };
