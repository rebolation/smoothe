const express = require('express');
const methodOverride = require('method-override')
const path = require('path');

const app = express()
const port = 3000

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.get('/myjson', (req, res) => {
    const users = [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' }
    ];
    res.json(users);
});

app.get('/:page', (req, res) => {
    const page = req.params.page;
    res.sendFile(path.join(__dirname, 'public', page + '.html'));
});


app.put('/myform', function (req, res) {
    const { name, email } = req.body;
    console.log(name, email)
    res.redirect(`/submitresult?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})








