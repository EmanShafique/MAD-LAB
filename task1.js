function createPerson(name = "", age = 0, address = "") {
    return {
        name,
        age,
        address
    };
}

function createStudent(name, age, address, rollNo = "", course = "") {
    let person = createPerson(name, age, address);
    return {
        ...person,
        role: "Student",
        rollNo,
        course
    };
}

function createEmployee(name, age, address, department = "", designation = "", salary = 0) {
    let person = createPerson(name, age, address);
    return {
        ...person,
        department,
        designation,
        salary
    };
}

function createTeacher(name, age, address, department, salary, subject = "") {
    let employee = createEmployee(name, age, address, department, "Teacher", salary);
    return {
        ...employee,
        subject
    };
}

function createStaff(name, age, address, department, salary, duty = "") {
    let employee = createEmployee(name, age, address, department, "Staff", salary);
    return {
        ...employee,
        duty
    };
}

function createCourse(courseName, teacher, students = []) {
    return {
        courseName,
        teacher,
        students
    };
}


let student1 = createStudent("Ali", 20, "Lahore", "S123", "CS");
let student2 = createStudent("Sara", 21, "Karachi", "S456", "IT");

let teacher1 = createTeacher("Mr. Ahmed", 40, "Islamabad", "CS Dept", 50000, "Programming");
let staff1 = createStaff("Mr. Khan", 35, "Rawalpindi", "Admin", 30000, "Clerk");

let course1 = createCourse("JavaScript", teacher1, [student1, student2]);

console.log(student1);
console.log(teacher1);
console.log(staff1);
console.log(course1);