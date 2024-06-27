const express = require('express');
const app = express();
app.get('/', (req,res) => {
    res.json({message:'Hello, API!'});
});
app.listen(3000, () => {
    console.log('API running on port 3000');
});