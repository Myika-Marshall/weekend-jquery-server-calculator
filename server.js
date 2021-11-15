const express = require('express');
const { send } = require('process');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));

app.get("/",(req,res)=>{
    console.log('in Get /')
    res.status(200);
})

app.get('/calculations', (req,res)=>{
    console.log('in GET /calculations')
    res.send(answers);
});

const answers = [];

answers.push(req.body);

app.post('/calculations',(req,res)=>{
    console.log('in POST /calculations');
    answers.push(req.body);
    res.send(answers);
});

function createResult (){
    console.log('in createResult');
    let answer = 0;
    if (data.operand === '+'){
        let answer= data.firstInput + data.secondInput;
        } else if (data.operand === '-'){
            let answer = data.firstInput - data.secondInput;
        } else if (data.operand === '*'){
            let answer = data.firstInput * data.secondInput;
        } else if (data.operand === '/'){
            let answer = data.firstInput / data.secondInput;
        }
        return answer;
}


app.listen(PORT, () => {
    console.log('listening on port', PORT)
});