import { rest } from 'msw';
import keyword from './keyword_insert.json';

export const handlers = [
  rest.get('/api/keyword', (req, res, ctx) => {
    return res(ctx.json(keyword));
  }),
];
