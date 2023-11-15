import styles from "./styles.module.scss";
const Transaction = ({ transactionData }: { transactionData: any }) => {
  return (
    <div className={styles.transaction}>
      <img src={transactionData.avatar} alt="NikeAvatar" />
      <div className={styles.main_data}>
        <div className={styles.transaction_title}>{transactionData.title}</div>
        <div className={styles.transaction_type}>{transactionData.type}</div>
      </div>
      <div className={styles.other_data}>
        <div className={styles.sum}>${transactionData.sum}</div>
        <div className={styles.date}>{transactionData.date}</div>
      </div>
    </div>
  );
};
export { Transaction };
