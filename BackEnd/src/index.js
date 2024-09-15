import express from 'express';
import routes from './routes/index.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors({
  origin:"http://localhost:3000",
  methods:['POST','GET']
}));
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
