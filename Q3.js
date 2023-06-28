const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const path = require("path");
let db = null;

const dbPath = path.join(__dirname, "customerDetails.db");

const customers = [
  {
    email: "anurag11@yopmail.com",
    name: "anurag",
  },
  {
    email: "sameer11@yopmail.com",
    name: "sameer",
  },
  {
    email: "ravi11@yopmail.com",
    name: "ravi",
  },
  {
    email: "akash11@yopmail.com",
    name: "akash",
  },
  {
    email: "anjali11@yopmail.com",
    name: "anjali",
  },
  {
    email: "santosh11@yopmail.com",
    name: "santosh",
  },
];

const connectDbServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    console.log("Database Connected successfully");
  } catch (e) {
    console.log(`DB Error:${e.message}`);
    process.exit(1);
  }
};

async function insertCustomers() {
  await connectDbServer();
  customers.forEach(async (customer) => {
    try {
      const existingCus = await db.get(
        `select * from customers where email = '${customer.email}'`
      );
      console.log(existingCus);
      if (existingCus) {
        await db.run(
          `UPDATE customers SET name ='${customer.name}' where email = '${existingCus.email}' `
        );
      } else {
        await db.run(
          `INSERT INTO customers (name,email) values ('${customer.name}','${customer.email}') `
        );
      }
      console.log("Data Inserted Successfully");
    } catch (error) {
      console.log({ error });
    }
  });
}
insertCustomers();
