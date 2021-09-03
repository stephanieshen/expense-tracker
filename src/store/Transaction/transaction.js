import { createSlice } from "@reduxjs/toolkit"

const transactionsState = {
	isLoading: true,
  expenses: []
}

const transactionSlice = createSlice({
	name: 'transactions',
	initialState: transactionsState,
	reducers: {
		setIsLoading(state, action) {
			state.isLoading = action.payload;
		},
		setExpenses(state, action) {
			state.expenses = action.payload;
		},
		addExpense(state, action) {
			state.expenses.push(action.payload);
		}
	}
});

export const transactionActions = transactionSlice.actions;

export default transactionSlice.reducer;
