// Define the interfaces
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Function to create an employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
    if ((salary as number) < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// String literal types
type Subjects = "Math" | "History";

// Function to teach a class
function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else if (todayClass === "History") {
        return "Teaching History";
    } else {
        return "No class today";
    }
}

// console.log(createEmployee(200)); // Teacher
// console.log(createEmployee(1000)); // Director
// console.log(createEmployee("$500")); // Director

console.log(teachClass("Math")); // Teaching Math
console.log(teachClass("History")); // Teaching History