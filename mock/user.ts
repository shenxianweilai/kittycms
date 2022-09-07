import { Request, Response } from 'express';
import mockjs from 'mockjs';

export default {
  'Get /api/users': mockjs.mock({
    'data|100': [
      {
        'id|+1': 1,
        username: '@city',
        'password|1-100': 50,
        'role|0-2': 1,
      },
    ],
  }),
  '/api/users/1': { id: 1 },
  'POST /api/users/create': (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Orgin', '*');
    res.end('ok');
  },
};
