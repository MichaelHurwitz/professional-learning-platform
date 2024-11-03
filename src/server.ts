import express from "express";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorHandler";
import connectDB from "./config/db";
import  swaggerUi  from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import userRoutes from "./routes/aouthRoutes";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use('/api/users', userRoutes);

connectDB();


const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Professional Learning Platform',
      version: '1.0.0',
      description: 'API for managing user and courses',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`, 
      },
    ],
  },
  apis: ['./dist/routes/*.js'], 
};
// Routes
const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))



// Error handling middleware
app.use(errorHandler);




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
