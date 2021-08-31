import { useState } from 'react';
import { ReactElement } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Transaction = (): ReactElement => {
  const [validated, setValidated] = useState<boolean>(false);

  const handleSubmit = (event: any): void => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }

  return (
    <div>
      <h3>Add Expense</h3>
      <Form onSubmit={handleSubmit} validated={validated} noValidate>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" required />
        </Form.Group>
        <Form.Control as="select" placeholder="Category" required>
          <option value="food">Food</option>
          <option value="utility bill">Utility Bill</option>
          <option value="subscription">Subscription</option>
          <option value="transportation">Transportation</option>
          <option value="Other">Other</option>
        </Form.Control>
        <Form.Group>
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" placeholder="Amount" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" placeholder="Date" required />
        </Form.Group>

        <Button type="submit">
          Add Expense
        </Button>
      </Form>
    </div>
  )
}

export default Transaction;
