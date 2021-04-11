import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './src/routes/user.routs'

const app = express()

//middlewars
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())

//routes
app.use(userRoutes);

app.listen(3000)
console.log('server on port',3000)