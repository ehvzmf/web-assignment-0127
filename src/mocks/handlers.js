import { rest } from 'msw';
import data from './keywork_insert.json';

export const handlers = [
  rest.get('/api/data', (req, res, ctx) => {
    return res(ctx.json(data));
  }),
];
