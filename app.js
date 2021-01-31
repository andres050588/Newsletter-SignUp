const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/signUp.html')
})
app.post('/', function(req, res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var eMail = req.body.inputEmail;
    console.log(firstName, lastName, eMail);
})





app.listen(3003, function(){
    console.log('The server is running on port 3003')
})



//API Key
// f21a030d38c305f897cc7db7fb73c222-us7
