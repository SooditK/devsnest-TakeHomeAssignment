// Task 1

function print(student) {
  for (let keys in student) console.log(keys);
}

var student = {
  name: "JS",
  property1: "Dot Notation",
  property2: "Bracket Notation",
};
print(student);

// Task 2

function printt(student) {
  delete student.property2;
  return student;
}
var student = {
  name: "JS",
  property1: "Dot Notation",
  property2: "Bracket Notation",
};
console.log(printt(student));

// Task 3

function printt(student) {
  let a = Object.keys(student).length;
  return a;
}
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(printt(student));

// Task 4

var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

for (var i = 0; i < library.length; i++) {
  var book = "'" + library[i].title + "'" + " by " + library[i].author + ".";
  if (library[i].readingStatus) {
    console.log("Already read " + book);
  } else {
    console.log("You still need to read " + book);
  }
}

// Task 5

function Cylinder(cyl_height, cyl_diameter) {
  this.cyl_height = cyl_height;
  this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Volume = function () {
  var radius = this.cyl_diameter / 2;
  return this.cyl_height * 3.14 * radius * radius;
};

var cyl = new Cylinder(15, 9);
console.log("volume =", cyl.Volume().toFixed(4));

// Task 6

var library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },

  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },

  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

library.sort((a, b) => b.libraryID - a.libraryID);
console.log(library);
