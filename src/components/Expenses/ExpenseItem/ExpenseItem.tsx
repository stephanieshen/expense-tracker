import { Expense } from "../../../models/expense.model";
import { formatCurrency } from "../../../services";
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
        <div className={styles.info}>
          <h5 className={styles.title}>
            {expense.title}
          </h5>
          <p className={styles.category}>
            {expense.category}
          </p>
        </div>
        <p className={styles.amount}>
          Php {formatCurrency(expense.amount)}
        </p>
      </div>
    </>
  )
}

export default ExpenseItem;
