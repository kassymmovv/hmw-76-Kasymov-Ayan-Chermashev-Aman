const express = require('express');
const fs = require('fs');
const port = 8000;
const app = express();
const cors = require('cors');
const nanoid = require('nanoid');

app.use(express.json());
app.use(cors());

app.post('/', (req,res) => {
    if (req.body.message === '' || req.body.author === ''){
        const error = {error: "It seems that you did not fill one of the fields"};
        res.status(400).send(error);
    }else {
        const date = new Date().toISOString();
        const dir = `./messages/${date}`;
        const key = "datetime";
        const id = nanoid();
        const idKey = "id";
        req.body[key] = date;
        req.body[idKey] = id;
        const data = JSON.stringify(req.body);
        fs.writeFile(dir,data, err => {
            if (err){
                console.log(err);
            }else {
                console.log('File was saved!')
            }
        });
        res.send(req.body)
    }


});
app.get('/messages',(req,res) => {
    const date = new Date(req.query.datetime);
    const files = fs.readdirSync('./messages').reverse();
    try{
        if (req.query.datetime) {
            if (isNaN(date.getDate())){
                const error = {error: "date is not correct"};
                res.status(400).send(error);
            }
            else if (req.query.datetime !== files){

                console.log('sa')
            }
                const array = [];

                for (let i = 0; i < files.length; i++) {
                    const file = fs.readFileSync('./messages/' + files[i]);

                    array.push(JSON.parse(file.toString()));
                }
                const newArray = array.filter(info => info.datetime > req.query.datetime);
                res.send(newArray);

        } else {
            const files = fs.readdirSync('./messages').reverse();
            const count = files.length < 30 ? files.length : 30;
            const array = [];
            for (let i = 0; i < count; i++) {
                const file = fs.readFileSync('./messages/' + files[i]);
                array.push(JSON.parse(file.toString()));
            }
            res.send(array)

        }

    }catch (e) {
        console.log(e);

    }

});


app.listen(port,() => {
    console.log(`Server start on ${port} port`)
});