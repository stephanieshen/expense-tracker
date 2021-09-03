import { useState } from 'react';
import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addExpense } from '../../store/Transaction/transaction-action';
import { ExpenseForm } from '../../models/expense.model';

const Transaction = (): ReactElement => {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<ExpenseForm>({
    title: null,
    category: 'food',
    amount: 0,
    date: null
  });

  const handleSubmit = (event: any): void => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    dispatch(addExpense(formValues));
  }

  const handleChange = (
    value: string | number,
    key: string
  ): void => {
    setFormValues({
      ...formValues,
      [key]: value
    })
  }

  return (
    <div>
      <h3>Add Expense</h3>
      <Form validated={validated} noValidate>
        <Form.Group>
          <Form.Label>
            Title
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            onChange={(e) => handleChange(e.target.value, 'title')}
            required 
          />
        </Form.Group>
        <Form.Control
          as="select"
          placeholder="Category"
          onChange={(e) => handleChange(e.target.value, 'category')}
          required
        >
          <option value="food">Food</option>
          <option value="utility bill">Utility Bill</option>
          <option value="subscription">Subscription</option>
          <option value="transportation">Transportation</option>
          <option value="Other">Other</option>
        </Form.Control>
        <Form.Group>
          <Form.Label>
            Amount
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Amount"
            onChange={(e) => handleChange(e.target.value, 'amount')}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Date
          </Form.Label>
          <Form.Control
            type="date"
            placeholder="Date"
            onChange={(e) => handleChange(e.target.value, 'date')}
            required
          />
        </Form.Group>

        <Button type="button" onClick={handleSubmit}>
          Add Expense
        </Button>
      </Form>
    </div>
  )
}

export default Transaction;
