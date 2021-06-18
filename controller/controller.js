const MongoSchema = require('../models/models.js');

exports.headlines = (req,res) => {
    MongoSchema.news.create({headlines:req.healines, desc: req.desc}).then((res => {
        console.log("Res: ", res);
    }))
}


exports.getHeadlines = (req,res) => {
    let response=[];
    MongoSchema.news.find().then((getheadline => {
         getheadline.forEach((element) => {
            response.push(element.headlines)
         })
         res.status(200).json({
            RES : response
         }) 
               
    }))

}

exports.user = (req,res) => {

}