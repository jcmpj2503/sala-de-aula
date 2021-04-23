// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../utils/database';

interface ResponseType {
  message: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
): Promise<void> => {
  const { db } = await connect();

  const response = await db.collection('users').insertOne({
    name: 'José Carlos',
    age: 54,
  });

  res.status(200).json(response.ops[0]);
};
