var mongoose = require('./config/database');

var User = require('./models/user');
var Truck = require('./models/truck');

var users = [
  {
    email:   "fakeUser@gmail.com",
    isTruckOwner: false,
    trucks: []
  },
  {
    email:   "fauxProfile@gmail.com",
    isTruckOwner: false,
    trucks: []
  },
  {
    email:   "falseAccount@gmail.com",
    isTruckOwner: false,
    trucks: []
  }
];

var trucks = [
  {
    name: "Baby's Badass Burgers",
    location: "The Reef",
    duration: "2 Hours",
    isActive: true,
    category: "American",
    ownerId: "982hiufj938fmi3fdf3",
    likes: []
  },
  {
    name: "The Grilled Cheese Truck",
    location: "The Reef",
    duration: "4 Hours",
    isActive: true,
    category: "American",
    ownerId: "567uhgt54er4edfgyuik",
    likes: []
  },
  {
    name: "Juana La Cubana",
    location: "The Reef",
    duration: "3 Hours",
    isActive: true,
    category: "Mexican",
    ownerId: "09jn87b5vc543s",
    likes: []
  }
];

User.remove({}, function(err) {
  if (err) console.log(err);
  User.create(users, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Access Granted: Database seeded with " + users.length  + " users.");
      mongoose.disconnect();
    }
  });
});

Truck.remove({}, function(err) {
  if (err) console.log(err);
  Truck.create(trucks, function(err, trucks) {
    if (err) {
      console.log(err);
    } else {
      console.log("Access Granted: Database seeded with " + trucks.length  + " trucks.");
      mongoose.disconnect();
    }
  });
});
