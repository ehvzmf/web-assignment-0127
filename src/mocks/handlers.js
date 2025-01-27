import { http } from 'msw';
import keyword from './keyword_insert.json';

export const handlers = [
  http.get('/api/keyword', (req, res, ctx) => {
    return res(ctx.json(keyword));
  }),
];
