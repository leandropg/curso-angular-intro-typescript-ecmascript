class Person {

    constructor (
        public firstName: String,
        public lastName: String
    ) {}
}

class WorkerPerson extends Person {

    /*id: number;             // By default is Public
    private name: String;
    public title: String;*/
    static serialNumber: number;

    constructor(
        private pFirstName: string,
        private pLastName: string,
        public id: number,
        public title: string,
        public age?: number
    ) {
        //this.name = name;
        super(pFirstName, pLastName);
    }
}

// Create instance
const andrew = new WorkerPerson('Andrew', 'Torres', 123, 'CEO');
console.log(andrew);
const andrea = new WorkerPerson('Andrea', 'Lopez', 456, 'CTO', 30);
console.log(andrea);