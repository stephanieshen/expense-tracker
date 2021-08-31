import { rest } from 'msw';

export const handlers = [
  rest.post('/expense', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: '123',
        title: 'Chatime',
        category: 'Food',
        amount: '300.00',
        date: '31/08/2021'
      })
    )
  })
];
