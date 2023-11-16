import PurpleCard from "../../assets/PurpleCard.svg";
import OrangeCard from "../../assets/OrangeCard.svg";
import styles from "./styles.module.scss";

const TotalBalance = ({ data }: { data: Card }) => {
  return (
    <div
      style={{
        backgroundColor: data.style == "orange" ? "#FF643B" : "#8234F8",
      }}
      className={styles.total_balance}
    >
      <div className={styles.title}>Total Balance</div>
      <div className={styles.sum}>${data.totalBalance}</div>
      <div className={styles.bank_account}>
        <img src={data.style == "purple" ? PurpleCard : OrangeCard} />
        <div className={styles.column_container}>
          <div>Bank Account</div>
          <div>{data.cardNumber}</div>
        </div>
      </div>
    </div>
  );
};

export { TotalBalance };
