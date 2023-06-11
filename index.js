const { writeJSONFile, readJSONFile } = require("./src/helpers");
const {
  create,
  destroy,
  edit,
  index,
  show,
} = require("./src/animalController.js");

const inform = console.log;

function run() {
  const action = process.argv[2];
  const shoe = process.argv[3];
  switch (action) {
    case "index":
      inform(action);
      break;
    case "create":
      create(action,shoe)
      inform(action, shoe);
      break;
    case "show":
      inform(action, shoe);
      break;
    case "update":
      inform(action, shoe);
      break;
    case "destroy":
      inform(action, shoe);
      break;
  }
}
run();


// A user can create a new item. ✅

// Data to write

// Convert to JSON string

// Write to the JSON file

// A user can see a list of all the items.

// A user can see the details of one item.

// A user can delete an item.

// A user can update an item.

// When a user performs an action like creating or deleting an item, the data file is updated correctly. If the JSON is malformed, there is some logic to prevent writing to the file and thus corrupting the data file.


// When a user creates an item a unique id is assigned to the new item.


// Add a cart function where a user can add items to the shopping cart and see the total price and total number of each item


// Add a cancel cart function that empties the shopping cart.


module.exports = {}