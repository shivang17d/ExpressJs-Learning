const express = require('express');
const path = require('path');  
const app = express(); 
const PORT = process.env.PORT || 3000



app.set('view engine', 'ejs')  // setting key-value pair

 
app.use(express.static('public'))

app.get('/',(req,res) => {
    res.render('index',{
        title:'My Home Page'
    });
})


app.get('/about',(req,res) => {
    res.render('about',{
        title: 'My About Page'
    });
})

app.get('/download',(req,res) => {
    res.download(path.resolve(__dirname) + '/about.html');
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

