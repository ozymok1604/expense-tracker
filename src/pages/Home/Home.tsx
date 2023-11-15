import { Analytics } from "../../components/Analytics";
import { Card } from "../../components/Card/Card";
import { Transactions } from "../../components/Transactions";
import { Footer } from "../../layouts/Footer/Footer";
import { Header } from "../../layouts/Header/Header";
import styles from "./styles.module.scss";
const Home = () => {
  return (
    <>
      <Header title="Home" />
      <div className={styles.page}>
        <Card />
        <Analytics />
        <Transactions />
      </div>

      <Footer />
    </>
  );
};

export { Home };
