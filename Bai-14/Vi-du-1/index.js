const express = require('express')
const app = express()
const port = 3000

app.set('views', './views');
app.set('view engine', 'pug');


app.use(express.static("public"));


app.get('/', function (req, res) {
    res.send('Hello World 123 456')
})
app.get('/ok', (req, res) =>{
    res.render("index.pug", {
        title: "trang chu",
        mes: "hello fmm"
    })
})
app.listen(port, () => {
    console.log(`running port ${port}`)
})

