import { Expense } from "../../../models/expense.model";
import CategoryIcon from "../../CategoryIcon/CategoryIcon";
import styles from './ExpenseItem.module.scss';
interface ExpenseItemProps {
  expense: Expense
}

const ExpenseItem = ({ expense } : ExpenseItemProps) => {
  return (
    <>
      <div data-testid="expense-item" className={styles.expenseItem}>
        <div data-testid="expense-icon" className={styles.iconWrapper}>
          <CategoryIcon category={expense.category} />
        </div>
        <div>
          <h5 className={styles.expenseTitle}>
            {expense.title}
          </h5>
          <p>
            {expense.category}
          </p>
        </div>
        <p className={styles.expenseAmount}>
          Php {expense.amount}
        </p>
      </div>
    </>
  )
}

export default ExpenseItem;
