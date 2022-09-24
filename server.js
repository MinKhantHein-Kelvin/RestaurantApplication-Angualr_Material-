const express = require ('express');
const app = express();


//Frontend angular running
app.use (express.static(__dirname + '/dist/restaurant-app'));
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname+ '/dist/restaurant-app/index.html'))
})


app.listen(process.env.PORT || 8080,()=>{
  console.log("server is running on port 8080")
})
