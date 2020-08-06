var express = require('express');
var stripe = require('stripe')('sk_test_51HA6MSIcQpp4qx68Q8yuWyieJBrNcKmN6qxgCpmPDTDbod1AwYllWHxP6N8yGr6gmQQznKV92VgEHsWQMRaO5DfH00eNnwYrP1');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
//cross origin start
var cors = require('cors');
var originsWhitelist = [
'http://localhost:4200'
];
var corsOptions = {
origin: function(origin, callback){
var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
callback(null, isWhitelisted);
},
credentials:true
}
app.use(cors(corsOptions));
//cross origin end
app.post('/payme',(req,res)=>{
console.log('The body is ',req.body);
varcharge=stripe.charges.create({
    amount:23000,
    currency:'inr',
    source:req.body.token
    },(err,charge) => {
        if(err) {
        //throwerr;
            console.log('error');
        }
        //console.log(charge);
        res.json({
            success :true,
            message :"Payment Done",
            response : charge,
        })
    });
})

 
app.listen(3000,()=>{
    console.log('Server starts at port 3000');
});