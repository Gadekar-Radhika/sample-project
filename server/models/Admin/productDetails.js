
//         required: 'This Field can\'t be empty'
const mongoose = require('mongoose');

var productDetail = mongoose.model('productDetail', {

    MinTHRange: { type: Number },

    MaxTHRange: { type: Number },

    MinpHRange: { type: Number },

    MaxpHRange: { type: Number },

    ProductName: { type: String },

    Dosage: { type: Number }

});



module.exports = { productDetail};