const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT ||5000



// this is midlewere

app.use(cors());
app.use(express.json());

const users =[

{id:1, name:'sohan46' ,email:'sm0000r7@gmail.com'},

{id:2, name:'sohan2346' ,email:'smr47670000@gmail.com'},

{id:3, name:'sohan26' ,email:'sm0080-00@gmail.com'},

{id:4, name:'sohan898' ,email:'sm09-98-000@gmail.com'},


]


app.get("/users",(req,res) =>{

    res.send(users)
})





app.get('/', (req, res) => {
  res.send('user manegment server is comming')
})



app.post('/users',(req,res) =>{

    console.log('post api hitting')
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})

app.listen(port, () => {
  console.log(`server is running on port  ${port}`)
})