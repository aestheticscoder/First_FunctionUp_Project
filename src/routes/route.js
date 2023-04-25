const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
const commonFile = require("./common");
const myUnderscore = require("underscore");

router.get("/test-me", function (req, res) {
  res.send("This should be working!");
});

router.get("/test-you", function (req, res) {
  console.log("The exported module is: ", commonFile);
  commonFile.doSomething();
  console.log("This is the constant I created", commonFile.name);
  res.send("Hello there, welcome to this application!");
});

router.get("/test-underscore", function (req, res) {
  let result = myUnderscore.first([11, 12, 23, 44, 15], 4);
  console.log("the result is", result);
  res.send("done");
});

router.get("/cohorts", function (request, response) {
  // logic to get the cohorts from database
  // logic tp get only the active cohorts
  // logic to get only the cohort with a size than 50
  // logic to get only the backend cohorts
  response.send(["technetium", "nobelium"]);
});

router.get("/students", function (req, res) {
  // receive or access the query params in the code
  // write a logic on these query params
  // city, score
  console.log(req.query);
  let requestedCity = req.query.city;
  let sortField = req.query.sort;
  // logic to get students
  res.send(["Sabiha", "Neha", "Akash", "Sonali"]);
});

router.get("/students/:studentName", function (req, res) {
  console.log(req.params.studentName);
  /// go to database and search for studentName student
  // store the data found in this variable - studentDetails
  //res.send({data: studentDetails})
  res.send("student data");
});

// Assignment Problem 1
router.get("/movies", function (req, res) {
  let moviesArray = ["The Godfather", "John Wick", "Hera Pheri", "Hungama"];
  res.send(moviesArray);
});

// Assignment Problem 2
router.get("/movies/:indexNumber", function (req, res) {
  let moviesArray = ["The Godfather", "John Wick", "Hera Pheri", "Hungama"];
  const indexNumber = req.params.indexNumber;
  const movie = moviesArray[indexNumber];
  res.send(movie);
});

// Assignment Problem 3
router.get("/getmovies/:indexNumber", function (req, res) {
  let moviesArray = ["The Godfather", "John Wick", "Hera Pheri", "Hungama"];

  const indexNumber = req.params.indexNumber;

  if (indexNumber >= moviesArray.length || indexNumber < 0) {
    res.send("Movie not found");
  } else {
    const movie = moviesArray[indexNumber];
    res.send(movie);
  }
});

// Assignment Problem 4
router.get("/films", function (req, res) {
  let filmsArray = [
    {
      id: 1,
      name: "Spiderman",
    },
    {
      id: 2,
      name: "Ironman",
    },
    {
      id: 3,
      name: "Captain America",
    },
    {
      id: 4,
      name: "Shaktiman",
    },
  ];
  res.send(filmsArray);
});

// Assignment Problem 5

router.get("/films/:id", function (req, res) {
  let filmsArray = [
    {
      id: 1,
      name: "Spiderman",
    },
    {
      id: 2,
      name: "Ironman",
    },
    {
      id: 3,
      name: "Captain America",
    },
    {
      id: 4,
      name: "Shaktiman",
    }
  ];
  const id = parseInt(req.params.id);

  const film = filmsArray.find((m) => m.id === id);
  if (!film) {
    res.send("No movie exists with this id");
  } else {
    res.send(film);
  }
});

// Assignment Problem 1 (Dated :24-04-2023)
router.get("/sol1", function (req, res) {
  
  let arr= [1,2,3,5,6,7]
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < arr.length; i++) {
     actualSum += arr[i];
  }

  let missingNumber = expectedSum - actualSum;

  
  res.send(  { data: missingNumber  }  );
});

// Assignment Problem 2 (Dated :24-04-2023)
router.get("/sol2", function (req, res) {
  let arr = [33, 34, 35, 37, 38];
  let n = arr.length + 1;
  let first = arr[0];
  let last = arr[arr.length - 1];
  let expectedSum = (n * (first + last)) / 2;
  let actualSum = 0;

  for (let i = 0; i < arr.length; i++) {
     actualSum += arr[i];
  }

  let missingNumber = expectedSum - actualSum;

  res.send({ data: missingNumber });
});

// Assignment Problem 3 (Dated :24-04-2023)
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]
   router.post("/players", function (req, res) {
    let myarr = players;
    let input = req.body
    const existingPlayer = players.find(player => player.name === input.name); //handlling edge cases
    if (existingPlayer) {
      return res.send({ message: 'Player already exists' });
    } 
    else {
  
    myarr.push(input)
   return res.send(  { data: players , status: true }  );
  }
  });


module.exports = router;
