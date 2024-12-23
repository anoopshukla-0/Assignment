let students = [
  {
    name: "Alice",
    age: 20,
    marks: {
      math: 85,
      science: 90,
      english: 88,
    },
  },
  {
    name: "John",
    age: 24,
    marks: {
      math: 90,
      science: 70,
      english: 98,
    },
  },
  {
    name: "Chris",
    age: 26,
    marks: {
      math: 98,
      science: 90,
      english: 99,
    },
  },
];

students.push({
  name: "Anoop",
  age: 26,
  marks: { math: 100, science: 97, english: 95 },
});

const highest = {name : "", averageMarks : -1}

for (let index = 0; index < students.length; index++) {
  const student = students[index];
  const marks = Object.values(student.marks);
  const averageMarks =
    marks.reduce((sum, curValue) => {
      sum += curValue;
      return sum;
    }, 0) / marks.length;

    if(highest.averageMarks < averageMarks){
      highest.averageMarks = averageMarks;
      highest.name = student.name;
    }
  console.log(`${student.name} Has an average of ${averageMarks}`);
}

console.log(`${highest.name} has an highest average of ${highest.averageMarks}`);