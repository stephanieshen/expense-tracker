import { render, screen, waitFor } from "../../test-utils/testing-library-utils";
import Expenses from "./Expenses";

test('render each expense item without crashing', async () => {
  render(<Expenses />);

  const title = screen.getByRole('heading', { name: /all expenses/i });
  expect(title).toBeInTheDocument();

  const loading = screen.getByTestId('loading-wrapper');
  expect(loading).toBeInTheDocument();

  await waitFor(async () => {
    const expenses = await screen.findAllByTestId('expense-item');
    const icon = await screen.findAllByTestId('expense-icon');
    const title = await screen.findAllByRole('heading');
    const price = await screen.findAllByText('Php', { exact: false });

    expenses.map((expense, index) => {
      expect(expense).toContainElement(icon[index])
      expect(title[index]).toBeInTheDocument()
      expect(price[index]).toBeInTheDocument()
    });
  });

  const loaded = screen.queryByTestId('loading-wrapper');
  expect(loaded).not.toBeInTheDocument();
});
