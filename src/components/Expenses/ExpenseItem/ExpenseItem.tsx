const ExpenseItem = () => {
  return (
    <>
      <div data-testid="expense-item">
        <div data-testid="expense-icon"></div>
        <h5>Item 1</h5>
        <p>Php 100.00</p>
      </div>

      <div data-testid="expense-item">
        <div data-testid="expense-icon"></div>
        <h5>Item 2</h5>
        <p>PHp 100.00</p>
      </div>
    </>
  )
}

export default ExpenseItem;
