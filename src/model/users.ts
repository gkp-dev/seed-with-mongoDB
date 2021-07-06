import mongoose from 'mongoose'

export type UserType = {
  _id: string
  avatarUrl: string
  lastname: string
  firstname: string
  email: string
  phoneNumber: string
  isAdmin: boolean
}

const userSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  avatarUrl: String,
  lastname: String,
  firstname: String,
  email: String,
  phoneNumber: String,
  isAdmin: Boolean,
})

const User = mongoose.model('user', userSchema)

export { User }
