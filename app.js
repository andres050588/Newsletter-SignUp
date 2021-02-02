const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const https = require('https');

app.use(bodyParser.urlencoded({extended: true}));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/signUp.html')
})
app.post('/', function(req, res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const eMail = req.body.inputEmail;


    const data = {
        members: [
            {
                email_address: eMail,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);
    const url = 'https://us7.api.mailchimp.com/3.0/lists/yyy';
    const options = {
        method: 'POST',
        auth: 'andresb:xxx'
    }

    const request = https.request(url, options, function(response){

        if (response.statusCode === 200){
            res.sendFile(__dirname + '/success.html')
        }else{
            res.sendFile(__dirname + '/failure.html')
        }
        response.on('data', function(data){
            console.log(JSON.parse(data));
        })
    });

    //request.write(jsonData);
    request.end();
})


app.post('/failure', function(req, res){
    res.redirect('/')
})


app.listen(3003, function(){
    console.log('The server is running on port 3003')
})



//API Key
//  xxx
//List ID
// yyy
