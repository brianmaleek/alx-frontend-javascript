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

// Implement the function to match the interface
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
    return `${firstName}. ${lastName}`;
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
console.log(printTeacher("John", "Doe"));
