import { createSlice } from "@reduxjs/toolkit"

const transactionsState = {
  expenses: []
}

const transactionSlice = createSlice({
	name: 'transactions',
	initialState: transactionsState,
	reducers: {
		addExpense(state, action) {
			state.expenses.push(action.payload);
		}
	}
});

export const transactionActions = transactionSlice.actions;

export default transactionSlice.reducer;
