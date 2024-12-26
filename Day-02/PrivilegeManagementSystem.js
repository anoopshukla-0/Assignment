function determineAccess(person) {
  const { role, experience, active, department } = person;

  return role === "admin"
    ? active
      ? experience > 5
        ? department === "IT"
          ? "Full IT Admin Access"
          : "Full General Admin Access"
        : "Limited Admin Access"
      : "Admin Access Revoked"
    : role === "manager"
    ? active
      ? experience > 4
        ? department === "Sales"
          ? "Full Sales Manager Access"
          : "Full Manager Access"
        : "Limited Manager Access"
      : "Manager Access Revoked"
    : role === "user"
    ? active
      ? department === "Support"
        ? "Priority Support Access"
        : "User Access"
      : "User Access Revoked"
    : "Invalid Role";
}

const person1 = {
  role: "admin",
  experience: 7,
  active: true,
  department: "IT",
};
console.log(determineAccess(person1));

const person2 = {
  role: "manager",
  experience: 4,
  active: true,
  department: "Marketing",
};
console.log(determineAccess(person2));

const person3 = {
  role: "user",
  experience: 2,
  active: true,
  department: "Support",
};
console.log(determineAccess(person3));

const person4 = {
  role: "user",
  experience: 2,
  active: true,
  department: "Finance",
};
console.log(determineAccess(person4));

const person5 = {
  role: "teammate",
  experience: 2,
  active: true,
  department: "Computer Science",
};
console.log(determineAccess(person5));