import Skeleton from "react-loading-skeleton";
import { RootStateOrAny, useSelector } from "react-redux";
import { Expense } from "../../models/expense.model";
import ExpenseItem from "./ExpenseItem/ExpenseItem"

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
          {transaction.expenses.map((expense: Expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
}

export default Expenses;
