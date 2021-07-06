import faker from 'faker'
import mongoose from 'mongoose'
import checkEnv from './core/helpers/checkEnv'
import './config/prelude'
import './config/mongodb'
import { User, UserType } from './model/users'

const addUser = (user: UserType): Promise<UserType> => {
  //@ts-ignore
  return user.save()
}

const seed = async () => {
  //Check if env Exists
  checkEnv()

  try {
    for (let i = 0; i < 30; i++) {
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        avatarUrl: faker.image.imageUrl(),
        lastname: faker.name.lastName(),
        firstname: faker.name.firstName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        isAdmin: false,
      })

      await addUser(user)
    }
    console.log('You database has been populated with 30 users...')

    //Exit
    process.exit(0)
  } catch (err) {
    throw new Error(err)
  }
}

seed()
