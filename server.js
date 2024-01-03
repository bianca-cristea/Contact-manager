import express from 'express';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();
import contactRoutes from './routes/contactRoutes.js';

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/contacts', contactRoutes);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
