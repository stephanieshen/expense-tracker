import { fetchExpenses, postExpense } from "../../data-services";
import { transactionActions } from "./transaction";

export const getExpenses = () => {
	return async (dispatch) => {

		const getAllExpensesData = async () => {
			const response = await fetchExpenses();
			return await response.json();
		}

		try {
			let expenses = await getAllExpensesData();
			expenses = Object.keys(expenses).map(key => ({
				id: key,
				...expenses[key]
			}));

			dispatch(transactionActions.setExpenses(expenses));
			dispatch(transactionActions.setIsLoading(false));
		} catch (error) {
			getAllExpensesData().catch(() =>
				alert('Error fetching expenses')
			)
		}
	}
}

export const addExpense = (expense) => {
	return async (dispatch) => {

		const addExpenseData = async () => {
			const response = await postExpense(expense);
			return await response.json();
		}

		try {
			dispatch(transactionActions.setIsLoading(true));

			const addedExpense = await addExpenseData();
			dispatch(transactionActions.addExpense({
				id: addedExpense.name,
				...expense
			}));

			dispatch(transactionActions.setIsLoading(false));
		} catch (error) {
			addExpenseData.catch(() => 
				alert('Error adding expense')
			);
		}
	}
}

