function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = "New property";
    hello = "override";
  };
}

@classDecorator
class MySuperClass {

  constructor(

      private myProperty: string
  ) { }

  showMyProperty() {

      console.log(this.myProperty);
  }
}

const myInstance = new MySuperClass('TS');
myInstance.showMyProperty();
console.log(MySuperClass);
//console.log(myInstance.newProperty);