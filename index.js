const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const chefs = require('./data/top_chefs.json')


app.get('/', (req, res) =>{
    res.send("ChefTracker is ready for providing data")
});

app.get('/chefs', (req, res) =>{
    res.send(chefs)
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})