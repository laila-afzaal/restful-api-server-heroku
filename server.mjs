import express from 'express'
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors());

let users = []

app.post('/user', (req, res) => {

  console.log(req.body)
  user.push(req.body)
  res.send(' User is created :) ')

})

app.get('/user', (req, res) => {
 
  res.send(users)
})

app.put('/user', (req, res) => {
 
  res.send('user is modified')

})

app.delete('/user', (req, res) => {
 
  res.send('here is your user: user1')

})

app.get('/', (req, res) => {
  console.log('server has received a request! ');
  res.send('Hello World :) !')
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})