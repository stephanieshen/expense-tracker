import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Expense } from "../../models/expense.model";
import { getExpenses } from "../../store/Transaction/transaction-action";
import ExpenseItem from "./ExpenseItem/ExpenseItem"

const Expenses = () => {
  const dispatch = useDispatch();
  const transaction = useSelector((state: RootStateOrAny) => state.transaction);

  useEffect(() => {
    dispatch(getExpenses());
  }, [dispatch]);
  
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
