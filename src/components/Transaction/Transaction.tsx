import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Transaction = () => {
  return (
    <div>
      <h3>Add Expense</h3>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" />
      </Form.Group>
      <Form.Control as="select" placeholder="Category">
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="black">Black</option>
        <option value="orange">Orange</option>
      </Form.Control>
      <Form.Group>
        <Form.Label>Amount</Form.Label>
        <Form.Control type="number" placeholder="Amount" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Date" />
      </Form.Group>

      <Button disabled={true}>
        Add Expense
      </Button>
    </div>
  )
}

export default Transaction;
