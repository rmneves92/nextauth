import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://rmneves:dxLuVHQI7uhlbzSu@cluster0.kukjf.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}
