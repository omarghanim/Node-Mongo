const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const dboper = require("./operations");

const url = "mongodb://localhost:27017/";
const dbname = "conFusion";
const app = express();
MongoClient.connect(url,{useNewUrlParser: true , useUnifiedTopology: true },function(err,client){

  assert.equal(err,null);
console.log("connected to correctly to server");

const db = client.db(dbname);
//insert
dboper.insertDocument(db,{name:"Donut",Description:"Delicious"},"dishes", (result)=>{
  console.log("Insert Document \n", result.ops);
    //find
    dboper.findDocuments(db,"dishes",(docs)=>{
      console.log("Found Documents:\n" , docs);
      //update
        dboper.updateDocument(db,{name:"Donut"},{Description:"updated taste"},"dishes",(result)=>{
          console.log("Updated Document: \n" , result.result);

              // FIND
              dboper.findDocuments(db, "dishes", (docs) => {
                            console.log("Found Updated Documents:\n", docs);

                            //Drop
                            db.dropCollection("dishes",(result)=>{
                              console.log("Dropped Collection :",result);
                              client.close();
                            });


        });

          });
              });
});


});


//
// const collection = db.collection("dishes");
//
//   collection.insertOne({"name":"Omar","Description":"Test"},(err,result)=>{
//     assert.equal(err,null);
//
//     console.log("After Insert:\n");
//     console.log(result.ops);
//
//     collection.find({}).toArray((err,docs)=>{
//       assert.equal(err,null);
//       console.log("Found\n");
// //
// db.dropCollection("dishes",(err,result)=>{
//   assert.equal(err,null);
// //
// client.close();
// });
// });
//   });
// });
