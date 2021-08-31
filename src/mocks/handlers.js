import { rest } from 'msw';

export const handlers = [
  rest.post('/expense', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: '123',
        title: 'Expense 1',
        category: 'Food',
        amount: '300.00',
        date: '08-31-2021'
      })
    )
  })
];
