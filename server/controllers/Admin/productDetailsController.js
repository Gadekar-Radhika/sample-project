
const express = require('express');

var router = express.Router();

//Import ObjectId from mongoose to check is the entered id is available in mongodb or not
var ObjectId = require('mongoose').Types.ObjectId;


var { productDetail } = require('../../models/Admin/productDetails');


// => localhost:3000/productDetails/

router.get('/', (req, res) => {

    productDetail.find((err, docs) => {

        if (!err) { res.send(docs); }

        else { console.log('Error in Retriving Product Details :' + JSON.stringify(err, undefined, 2)); }

    });

});

//get product by an ID
router.get('/:id', (req,res)=>
{
   if(!ObjectId.isValid(req.params.id))
   return res.status(400).send(`No Record with given id :  ${req.params.id}`);

   productDetail.findById(req.params.id,(err, doc)=>{
    if (!err) { res.send(doc); }
    else { console.log('Error in Retriving Product Details :' + JSON.stringify(err, undefined, 2)); }
   });
});


//This will post the prouct data to the url
router.post('/', (req, res)=>
{
    //create an object of productDetail model class inside that we have field details of Product Details
    var products = new productDetail(
        {
            MinTHRange : req.body.MinTHRange,
            MaxTHRange : req.body.MaxTHRange,
            MinpHRange : req.body.MinpHRange,
            MaxpHRange : req.body.MaxpHRange,
            ProductName : req.body.ProductName,
            Dosage : req.body.Dosage,
        });
        //insert data into mongoDB , after saving the record it will callback the function if there is any error it will sent to 'err' parameter , if condition is true then it will send parameters which is newly inserted 
        products.save((err, doc)=>{
             if(!err){ res.send(doc);}
             else{ console.log("Error in Product Detail Save : " + JSON.stringify(err,undefined,2));}
        });
});

//Update Product value with Put method
router.put("/:id",(req, res)=>
{
  if(!ObjectId.isValid(req.params.id))
  return res.status(400).send(`No record with given id : $(req.params.id)`);

  var products = 
    {
        MinTHRange : req.body.MinTHRange,
        MaxTHRange : req.body.MaxTHRange,
        MinpHRange : req.body.MinpHRange,
        MaxpHRange : req.body.MaxpHRange,
        ProductName : req.body.ProductName,
        Dosage : req.body.Dosage,
    };
    productDetail.findByIdAndUpdate(req.params.id, {$set:products},{new:true},(err,doc)=>
    {
        if(!err){ res.send(doc);}
        else{ console.log("Error in Product Update : " + JSON.stringify(err,undefined,2));}
    });
});

//delete product
router.delete('/:id',(req,res)=>
{
    if(!ObjectId.isValid(req.params.id))
   return res.status(400).send(`No Record with given id :  ${req.params.id}`);

   productDetail.findByIdAndRemove(req.params.id,(err,doc)=>
   {
    if(!err){ res.send(doc);}
    else{ console.log("Error in Product Delete : " + JSON.stringify(err,undefined,2));}
   });
});
module.exports = router;