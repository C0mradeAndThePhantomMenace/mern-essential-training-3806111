import express from 'express'
const app = express()
const PORT = 4000

app.get(
  '/', 
  (req, res) => res. send(`Shiny-Train App is running at port ${PORT}`)
)

app.listen(
  PORT,
  () => console.log(`Shiny-Train App is running at port ${PORT}`)
)