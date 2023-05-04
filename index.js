const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const chefs = require('./data/top_chefs.json')

const chefsDetails = require('./data/Chefs__recipes.json')


app.get('/', (req, res) =>{
    res.send("ChefTracker server is ready for providing data")
});

app.get('/chefs', (req, res) =>{
    res.send(chefs)
});

app.get("/:id", (req, res) =>{
  const id = Number(req.params.id);
  const chef = chefsDetails.find(cd => Number(cd.chef_id) === id);
  console.log(id, chef);
  res.send(chef)

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})