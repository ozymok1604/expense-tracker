import Mastercard from "../../assets/Mastercard.svg";
import styles from "./styles.module.scss";
const Card = () => {
  return (
    <>
      <div className={styles.other_card}></div>
      <div className={styles.card}>
        <div className={styles.options_container}>
          <div className={styles.options}>...</div>
        </div>
        <div className={styles.card_content}>
          <div className={styles.balance_title}>Total Balance</div>
          <div className={styles.balance}>$50.665</div>
          <div className={styles.card_number_container}>
            <div className={styles.card_number}>1234 5432 6546 2454</div>
            <img src={Mastercard} alt="Mastercard" />
          </div>
        </div>
      </div>
    </>
  );
};

export { Card };
