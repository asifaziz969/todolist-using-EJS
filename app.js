// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();
app.set('view engine', 'ejs');

const port = 5000;

var items = ["i go to office", "i eat pasta", "i play golf"];

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route for the root path ('/')
app.get('/', (req, res) => {
  const currentDate = new Date();

  var option = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  const formattedDate = currentDate.toLocaleDateString('en-US', option);

  // Render the 'list' EJS template and pass the 'day' variable
  res.render('list', { today: formattedDate, newListItems: items });
});

app.post('/', (req, res) => {
  const inputData = req.body.newItem;
  items.push(inputData);

  // Redirect to the root path after adding a new item
  res.redirect("/");
});


// Start the Express application
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
