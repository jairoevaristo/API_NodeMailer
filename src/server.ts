import app from './setup/app'; 

const PORT = process.env.PORT|| 3001;

const server = app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));

process.on('SIGINT', () => {
  server.close();
  console.log('closed server');
});