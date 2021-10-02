import Skeleton from "react-loading-skeleton";
import { RootStateOrAny, useSelector } from "react-redux";
import { Expense } from "../../models/expense.model";
import ExpenseItem from "./ExpenseItem/ExpenseItem"
import styles from './Expenses.module.scss'

const Expenses = () => {
  const transaction = useSelector((state: RootStateOrAny) => state.transaction);
  
  return (
    <div>
      <h4>All Expenses</h4>
      {transaction.isLoading ? (
        <div data-testid="loading-wrapper">
          <Skeleton
            count={4}
            height={70}
            style={{ margin: '.4em 0'}}
          />
        </div>
      ) : (
        <>
          {transaction.expenses.length > 0 ? (
            transaction.expenses.map((expense: Expense) => (
              <ExpenseItem key={expense.id} expense={expense} />
            ))
          ) : (
            <h6 className={styles.noData}>
              Nothing to display
            </h6>
          )}
        </>
      )}
    </div>
  );
}

export default Expenses;
