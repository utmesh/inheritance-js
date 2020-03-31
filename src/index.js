function Person(firstName, lastName) {
  this.FirstName = firstName || "unknown";
  this.LastName = lastName || "unknown";
}

Person.prototype.getFullName = function() {
  return this.FirstName + " " + this.LastName;
};
function Student(firstName, lastName, schoolName, grade) {
  Person.call(this, firstName, lastName);

  this.SchoolName = schoolName || "unknown";
  this.Grade = grade || 0;
}
//Student.prototype = Person.prototype;
Student.prototype = new Person();
Student.prototype.constructor = Student;

var std = new Student("James", "Bond", "XYZ", 10);

console.log(std.getFullName()); // James Bond
console.log(std instanceof Student); // true
console.log(std instanceof Person); // true

//Details:https://www.tutorialsteacher.com/javascript/inheritance-in-javascript
