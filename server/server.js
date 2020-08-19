import cors from 'cors';
import express from 'express';

import users from './routes/users';
import todos from './routes/todos';

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());
app.use('/users', users);
app.use('/todos', todos);

app.listen(PORT, () => {
  console.info(`Server: http://localhost:${PORT}`);
});
