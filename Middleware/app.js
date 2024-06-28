const express = require('express');
const app = express();
app.use((req,res,next) => {
    console.log('middleware executed');
    next();

});
app.get('/', (req,res) => {
    res.send('Hello with Middleware ');

});
app.listen(3000, () => {
     console.log('server running with middleware');
});