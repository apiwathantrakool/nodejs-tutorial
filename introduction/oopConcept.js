const person = {
  name: 'John',
  age: 30,
  //   Need to define as function to make it local not global when using arrow function.
  greet: function () {
    return 'Hello ' + this.name + ' ' + this.age;
  },
};

console.log(person.greet());
