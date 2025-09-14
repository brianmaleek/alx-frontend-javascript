interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Director extends Teacher {
    numberOfReports: number;
}

// Define the function interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Interface for the class parameters
interface StudentConstructor {
    firstName: string;
    lastName: string;
}

// Interface for the class methods
interface StudentClassInterface {
    workOnHomework (): string;
    displayName (): string;
}

// Implement the function to match the interface
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
    return `${firstName}. ${lastName}`;
}

// Class implementation
class StudentClass {
    private firstName: string;
    private lastName: string;

    constructor ({ firstName, lastName}: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working"
    }

    displayName(): string {
        return this.firstName
    }
}


// Create some teacher and director objects
const teacher3: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false
};

const teacher4: Teacher = {
    firstName: "Jane",
    lastName: "Smith",
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: "New York",
    specialty: "Mathematics"
};

const director1: Director = {
    firstName: "Joe",
    lastName: "Black",
    fullTimeEmployee: true,
    location: "San Juan",
    numberOfReports: 5
};


// console.log(teacher3);
// console.log(teacher4);
// console.log(director1);
// console.log(printTeacher("John", "Doe"));

// Example usage:
const student = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working
