import mongoose from 'mongoose'

main().catch((err) => console.log(err))

async function main() {
  const db = await mongoose
    .connect('mongodb://cancodeCountdownTimer:db_CountdownTimer_@3.136.75.195:27017/countdowntimer')
    .then(() => {
      console.log('MongoDB Connected...')
    })

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

export default main
