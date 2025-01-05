function extractManagerDetails(company){
    const {departments} = company;
    const managers = [];
    
    for (const dept in departments) {
        const {manager} = departments[dept];
        managers.push(manager)
    }
    return managers;
}

function calculateAverageSalary(company) {
    const {departments} = company;
    let tatalSalary = 0;
    let totalPeople = 0;
    
    for (const dept in departments) {
        const {manager, employees} = departments[dept];
        tatalSalary += manager.salary;
        totalPeople++;
        
        employees.forEach(employee => {
            tatalSalary += employee.salary;
            totalPeople++;
        });
    }
    return (tatalSalary / totalPeople).toFixed(2)
}

function findHighestPaidEmployee(company) {
    const {departments} = company;
    let highestPaid = {name: "", salary: 0};
    
    for (const dept in departments) {
        const {manager, employees} = departments[dept];
        if (manager.salary > highestPaid.salary) {
            highestPaid = {name: manager.name, salary: manager.salary};
        }
        employees.forEach(emoloyee => {
            if (employees.salary > highestPaid.salary) {
                highestPaid = {name: employee.name, salary: employee.salary}
            }
        });
    }
    return highestPaid;
}



const company = {
  name: "Tech Solutions Inc.",
  departments: {
    engineering: {
     manager: {
        name: "John Doe",
        age: 35,
        position: "Engineering Manager",
       salary: 100000,
              },
      employees: [
        { name: "Alice", age: 28, position: "Software Engineer", salary: 80000 },
        { name: "Bob", age: 30, position: "Senior Software Engineer", salary: 90000 },
      ],
    },
    sales: {
      manager: {
        name: "Jane Smith",
        age: 40,
        position: "Sales Manager",
        salary: 95000,
      },
      employees: [
        { name: "Charlie", age: 32, position: "Sales Representative", salary: 60000 },
        { name: "David", age: 29, position: "Sales Associate", salary: 50000 },
      ],
    },
    marketing: {
      manager: {
        name: "Emily Johnson",
        age: 37,
        position: "Marketing Manager",
        salary: 90000,
      },
      employees: [
        { name: "Eva", age: 31, position: "Marketing Specialist", salary: 70000 },
        { name: "Frank", age: 33, position: "Marketing Coordinator", salary: 65000 },
      ],
    },
  },
};



console.log("Manager Details:", extractManagerDetails(company));
console.log("Average Salary:", calculateAverageSalary(company));
console.log("Highest Paid Employee:", findHighestPaidEmployee(company));