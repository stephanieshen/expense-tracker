import { render, screen } from '../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import Transaction from './Transaction';

test('render form without crashing', () => {
  render(<Transaction />);

  const addExpenseTitle = screen.getByRole('heading', { name: /add expense/i });
  expect(addExpenseTitle).toBeInTheDocument();

  const expenseTitle = screen.getByPlaceholderText(/title/i);
  expect(expenseTitle).toBeInTheDocument();

  const expenseCategory = screen.getByPlaceholderText(/category/i);
  expect(expenseCategory).toBeInTheDocument();

  const expenseAmount = screen.getByPlaceholderText(/amount/i);
  expect(expenseAmount).toBeInTheDocument();

  const expenseDate = screen.getByPlaceholderText(/date/i);
  expect(expenseDate).toBeInTheDocument();

  const addExpenseButton = screen.getByRole('button', { name: /add expense/i });
  expect(addExpenseButton).toBeInTheDocument();
});

test('adding of expense', () => {
  render(<Transaction />);

  const titleInput = screen.getByPlaceholderText(/title/i);
  userEvent.type(titleInput, 'Chatime');

  const categorySelect = screen.getByPlaceholderText(/category/i);
  userEvent.selectOptions(categorySelect, 'food');

  const amountInput = screen.getByPlaceholderText(/amount/i);
  userEvent.type(amountInput, '300');

  const dateInput = screen.getByPlaceholderText(/date/i);
  userEvent.type(dateInput, '31/08/2021');

  const addExpenseButton = screen.getByRole('button', { name: /add expense/i });
  userEvent.click(addExpenseButton);
});
