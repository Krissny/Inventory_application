const pool = require("./pool");

async function insertTable() {
  try {
    const client = await pool.connect();
    await client.query(`
      CREATE TABLE IF NOT EXISTS Books(
        BookId SERIAL PRIMARY KEY,
        Title VARCHAR(255),
        Author VARCHAR(255),
        Genre VARCHAR(255),
        PublicationYear INT,
        Link VARCHAR(255)
      );
    `);
    await client.query(`
      DROP TABLE usernames;
    `);
    await client.query(`
      TRUNCATE TABLE Books;
    `);
    console.log("connection successful");
    client.release();
  } catch (err) {
    console.error("Error executing query", err.stack);
  }
}

insertTable();
