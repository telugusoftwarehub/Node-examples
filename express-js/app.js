const express = require('express');
const app = express();
app.get('/', (req,res) => {
    res.send('Hello , Express !');

});

app.listen(3000 , () => {
    console.log('express server running on port 3000');
})