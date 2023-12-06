interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    yearsOfExperience?: number,
    [key: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number
}

const teacher1: Teacher = {
    firstName: "Sos",
    lastName: "Timi",
    fullTimeEmployee: true,
    location: "Mwiki",
    contract: false
}

console.log(teacher1);

const director1: Directors = {
    firstName: "Diamond",
    lastName: "Platz",
    fullTimeEmployee: true,
    location: "Kasarani",
    numberOfReports: 17
}

// This function accepts 2 arguments: firstName and lastName
// It returns the first letter of the first name and a full last name
// Example: printTeacher("John", "Doe") -> J. Doe
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName[0]}. ${lastName};`

console.log(printTeacher('Wayne', 'Rooney'));

interface StudentClassInterface {
    firstName: string;
    lastName: string;
}

interface StudentClassConstructorInterface {
    new(firstName: string, lastName: string): StudentClassInterface
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

function createStudent(cStudent: StudentClassConstructorInterface, firstName: string, lastName: string): StudentClassInterface {
    return new cStudent(firstName, lastName);
}

const student1 = createStudent(StudentClass, "Sos", "Team");
console.log(student1);