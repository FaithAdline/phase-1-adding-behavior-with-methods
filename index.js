// Your code here
class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      if (this.sex === 'male') {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  // Example usage
  const myCat = new Cat('Fluffy', 'female');
  console.log(myCat.speak()); // Output: "Fluffy says meow!"
  
  const myDog = new Dog('Buddy', 'male');
  console.log(myDog.speak()); // Output: "Buddy says woof!"
  
  const myBird = new Bird('Polly', 'female');
  console.log(myBird.speak()); // Output: "Polly says squawk!"
  