import express from 'express';

import users from './routes/users';
import todos from './routes/todos'

const app = express();

app.use('/users', users);
app.use('/todos', todos);

app.listen(5001, () => {
  console.log('Server is running')
});
