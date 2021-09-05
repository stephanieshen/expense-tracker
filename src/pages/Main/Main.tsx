import Dashboard from "../../components/Dashboard/Dashboard";
import Expenses from "../../components/Expenses/Expenses";
import Transaction from "../../components/Transaction/Transaction"
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div>
      <h3 className={styles.title}>
        Expense Tracker
      </h3>
      <section className={styles.section}>
        <Dashboard />
      </section>
      <section className={styles.section}>
        <Expenses />
      </section>
      <section className={styles.section}>
        <Transaction />
      </section>
    </div>
  )
}

export default Main;
