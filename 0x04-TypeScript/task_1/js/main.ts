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

// Define the interface for the function
interface printTeacherFunction {
    (params: {firstName: string, lastName: string}): string;
}

// Create the function declaration that implements the interface
function printTeacher(firstName: string, lastName: string): string {
    return `${firstName}. ${lastName}`;
}

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
console.log(printTeacher("john", "Doe"));
