const person = {
  id: 2,
  gender: "mail",
};

const student = {
  name: "ravi",
  email: "ravi11@yopmail.com",
};

const result = {
  ...person,
  ...student,
};

console.log(result);
