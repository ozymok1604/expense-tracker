import NikeAvatar from "../../assets/NikeAvatar.svg";
import PumaAvatar from "../../assets/PumaAvatar.svg";
import { Transaction } from "../Transaction/Transaction";
import styles from "./styles.module.scss";
const Transactions = () => {
  const data = [
    {
      avatar: NikeAvatar,
      title: "Nike Super Store",
      type: "Bank Account",
      sum: 545,
      date: "Fri, 05 April 2022",
    },
    {
      avatar: PumaAvatar,
      title: "Puma SUper Store",
      type: "Bank Account",
      sum: 345,
      date: "Fri, 05 May 2022",
    },
  ];
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>Transactions</div>
        <div className={styles.view}>View All</div>
      </div>
      <div className={styles.transactions_container}>
        {data?.map((transaction: any) => (
          <Transaction transactionData={transaction} />
        ))}
      </div>
    </div>
  );
};

export { Transactions };
