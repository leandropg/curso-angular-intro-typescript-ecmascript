/*
    ===== Código de TypeScript =====
*/
function add ( a: number, b: number): number {

    return (a + b);
}

// ? Optional  |  = Initalized
const addArrow = (a: number, b: number, c?: number, d: number = 10): number => {

    return (a + b) * d;
}

console.log(add(10, 20));
console.log(addArrow(10, 20));

interface Employee {

    name: string,
    salary: number,
    showSalary: () => void;
}

function increaseSalary(employee: Employee, incrementValue: number): void {

    employee.salary += incrementValue;
}

const leandro : Employee = {

    name: "Leandro",
    salary: 1000000,
    showSalary() {

        console.log(this.salary);
    }
}

increaseSalary(leandro, 1000000);
leandro.showSalary();