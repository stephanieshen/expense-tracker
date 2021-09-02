import { createSlice } from "@reduxjs/toolkit"

const transactionsState = {
  expenses: []
}

const transactionSlice = createSlice({
	name: 'transactions',
	initialState: transactionsState,
	reducers: {
		addExpense(state, action) {
			console.log(action.payload);
			state.expenses.push(action.payload);
		}
	}
});

export const transactionActions = transactionSlice.actions;

export default transactionSlice.reducer;
