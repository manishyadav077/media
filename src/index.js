import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()

// const app = express()

// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error)=> {
//             console.log("ERRR: ", error)
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is running`)
//         })

//     } catch (error) {
//         console.error("ERROR: ", error)
//     }
// })()