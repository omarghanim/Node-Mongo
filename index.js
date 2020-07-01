const express = require("express");
var mongodb = require('mongodb');

const MongoClient = require("mongodb").MongoClient;
var assert = require("assert");

const url = "mongodb://localhost:27017/";
const dbname = "conFusion";
const app = express();
MongoClient.connect(url,{useNewUrlParser: true , useUnifiedTopology: true },function(err,client){
//
  assert.equal(null,null);
console.log("connected to correctly to server");

const db = client.db(dbname);

const collection = db.collection("dishes");

  collection.insertOne({"name":"Omar","Description":"Test"},(err,result)=>{
    assert.equal(err,null);

    console.log("After Insert:\n");
    console.log(result.ops);

    collection.find({}).toArray((err,docs)=>{
      assert.equal(err,null);
      console.log("found\n");

db.dropCollection("dishes",(err,result)=>{
  assert.equal(err,null);

client.close();
});
});
  });
});
