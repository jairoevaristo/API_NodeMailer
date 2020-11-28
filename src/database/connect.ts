import { createConnection } from 'typeorm';

export default async () => {
  const connect = await createConnection();
  console.log('Connected in database');

  process.on('SIGINT', () => {
    connect.close().then(() => console.log('Disconnected database'))
  });
  
};