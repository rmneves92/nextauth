import { connectToDatabase } from '../../../lib/db';
import { hashedPassword } from '../../../lib/auth';

function handler(req, res) {
  const data = req.body;

  const { email, password } = data;

  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        'Invalid input - passowrd should also be at leat 7 characters long.',
    });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const hashedPassword = hashedPassword(password);

  const reuslt = await db.collection('users').insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'Created user!' });
}

export default handler;
