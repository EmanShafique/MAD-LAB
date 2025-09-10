function createEmployee(name = "", dept = "general") {
    return {
        name,
        dept
    };
}

function createManager(name, dept, reports = []) {
    let employee = createEmployee(name, dept);
    return {
        ...employee,
        reports 
    };
}

function createWorkerBee(name, dept, projects = []) {
    let employee = createEmployee(name, dept);
    return {
        ...employee,
        projects 
    };
}

function createSalesPerson(name, quota = 100) {
    let worker = createWorkerBee(name, "sales");
    return {
        ...worker,
        quota
    };
}

function createEngineer(name, machine = "") {
    let worker = createWorkerBee(name, "engineering");
    return {
        ...worker,
        machine
    };
}


let emp1 = createEmployee("Ali");
let mgr1 = createManager("Zara", "IT", [emp1]);
let worker1 = createWorkerBee("Hassan", "IT", ["Project A", "Project B"]);
let sales1 = createSalesPerson("Ayesha", 150);
let eng1 = createEngineer("Bilal", "Lathe Machine");

console.log(emp1);
console.log(mgr1);
console.log(worker1);
console.log(sales1);
console.log(eng1);