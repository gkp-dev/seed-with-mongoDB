import mongoose from 'mongoose'

mongoose
  .connect(process.env.MONGODB_URL || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(console.error)
