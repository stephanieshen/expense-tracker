import { endpoint } from "../firebase/firebase";

export const postExpense = async (expense) => {
  return await fetch(
    endpoint + 'expenses.json',
    {
      method: 'POST',
      body: JSON.stringify(expense)
    }
  ); 
}

export const fetchExpenses = async () => {
  return await fetch(
    endpoint + 'expenses.json',
    {
      method: 'GET'
    }
  );
}
