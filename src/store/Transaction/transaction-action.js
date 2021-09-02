import { endpoint } from "../../firebase/firebase"
import { transactionActions } from "./transaction";

export const addExpense = (expense) => {
	return async (dispatch) => {

		const addExpenseData = async () => {
			const response = await fetch(
				endpoint + 'expenses.json',
				{
					method: 'POST',
					body: JSON.stringify(expense)
				}
			);

			return await response.json();
		}

		try {
			const addedExpense = await addExpenseData();
			dispatch(transactionActions.addExpense({
				id: addedExpense.name,
				...expense
			}));
		} catch (error) {
			addExpenseData.catch(() => 
				alert('Error adding expense')
			);
		}
	}
}

