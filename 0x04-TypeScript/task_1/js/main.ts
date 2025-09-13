interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
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

console.log(teacher3);
// console.log(teacher4);
