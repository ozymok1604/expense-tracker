import styles from "./styles.module.scss";
import NikeAvatar from "../../assets/NikeAvatar.svg";
const Expenses = () => {
  return (
    <div className={styles.expenses}>
      <div className={styles.header}>
        <div className={styles.title}>Expenses</div>
        <div className={styles.view}>View All</div>
      </div>
      <div className={styles.expenses_block}>
        <div className={styles.block_header}>
          <img src={NikeAvatar} />
          <div className={styles.main_data}>
            <div className={styles.expense_title}>Nike Super Store</div>
            <div className={styles.expense_type}>Bank Account</div>
          </div>
          <div className={styles.date}>April 2022</div>
        </div>
        <div className={styles.spends_titles}>
          <div className={styles.text}>Total Spends</div>
          <div className={styles.text}>Total Budget</div>
        </div>
        <div className={styles.spends}>
          <div className={styles.spend}>$4335</div>
          <div className={styles.budget}>$6635</div>
          <div className={styles.procents}>65%</div>
        </div>
        <div className={styles.procents_scale}></div>
      </div>
    </div>
  );
};

export { Expenses };
