import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello from api")
})

app.listen(port || 5000, () => {
  console.log("Listening to port " + port)

})
