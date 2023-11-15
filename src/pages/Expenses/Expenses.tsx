import { Calendar } from "../../components/Calendar";
import { Expenses } from "../../components/Expenses";
import { TotalBalance } from "../../components/TotalBalance";
import { Footer } from "../../layouts/Footer/Footer";
import { Header } from "../../layouts/Header/Header";
import styles from "./styles.module.scss";
const ExpensesPage = () => {
  const cardsData = [
    { totalBalance: "24555", cardNumber: "**** **** 3245", style: "orange" },
    { totalBalance: "45517", cardNumber: "**** **** 3885", style: "purple" },
  ];
  return (
    <>
      <Header title="Expenses" />
      <div className={styles.page_content}>
        <Calendar />
        <div className={styles.wrapper}>
          {cardsData.map((cardData: any) => (
            <TotalBalance data={cardData} />
          ))}
        </div>
        <Expenses />
      </div>
      <Footer />
    </>
  );
};

export { ExpensesPage };
