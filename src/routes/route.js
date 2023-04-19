const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
const welcome = require('../logger/logger')
const helper = require('../util/helper')
const formatter = require('../validator/formatter')
const LodashArray = require('lodash')


router.get('/test-me', function (req, res) {
    res.send('This should be working!') 

    // Problem 1
    welcome.welcome() 

    // Problem 2
    helper.printDate()
    helper.printMonth()
    helper.getBatchInfo()

    //Problem 3
    formatter.trim()
    formatter.toLowerCase()
    formatter.toUpperCase()

    // Problem 4.1
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const subArrays = LodashArray.chunk(months, 3);
      for (let i = 0; i < subArrays.length; i++) {
        console.log(`Sub-array ${i+1}: ${subArrays[i]}`);
      }

      //Problem 4.2
      const oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
      const lastNineNumbers = LodashArray.tail(oddNumbers);
      console.log(lastNineNumbers);

      //Problem 4.3
      const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const arr3 = [5, 6, 7, 8, 9];
const arr4 = [7, 8, 9, 10, 11];
const arr5 = [9, 10, 11, 12, 13];
const uniqueValues = LodashArray.union(arr1, arr2, arr3, arr4, arr5);
console.log(uniqueValues);

//Problem 4.4
const keyValPairs = [
    ["horror", "The Shining"],
    ["drama", "Titanic"],
    ["thriller", "Shutter Island"],
    ["fantasy", "Pans Labyrinth"]
  ];
  const obj = LodashArray.fromPairs(keyValPairs);
  console.log(obj);
});

router.get('/test-you', function (req, res) {
    console.log('This is the constant I created', commonFile.name)
    commonFile.doSomething()
    res.send('Hello there, welcome to this application!')
});


module.exports = router;