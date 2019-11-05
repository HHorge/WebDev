
const express = require('express');
const router = express.Router();
const albumModel = require('../models/album.js')
const { ObjectId } = require('mongodb')

/* GET albums from db. */
router.get('/', async function(req, res, next) {
    albumModel.find({}, function(err, foundData){
      if(err){
        console.log(err);
        return res.status(500).send();
      } else {
        return res.status(200).send(foundData);
      }
    }
  ); 
  });
  
  //WRITE RATING TO DB
//DOES NOT WORK
  router.put('/', async function(req, res){
      const { rating } = req.body

    // albumModel.findByIdAndUpdate(ObjectId("5da720c93e73fc020c6c28c6"),
    //   { $push : { Rating: "hei"}},
    //   { new: true, upsert: true },
    //   function (err){
    //     if(err) throw err;
    //   })
    // });

    try {
      albumModel.findByIdAndUpdate("5da720c93e73fc020c6c28c6", JSON.stringify(({Rating : ["Hei"]})))
    } catch (error) {
      console.error(error)
      res.status(500).send("Server error")
    }
  });
  
module.exports = router;