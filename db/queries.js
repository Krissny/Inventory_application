const pool = require("./pool");

async function insertTable() {
  try {
    const client = await pool.connect();
    // await client.query(`
    //   CREATE TABLE IF NOT EXISTS usernames (
    //     id SERIAL PRIMARY KEY,
    //     username VARCHAR(255)
    //   );
    // `);
    // await client.query(`
    //   INSERT INTO usernames (username)
    //   VALUES
    //     ('Bryan'),
    //     ('Odin'),
    //     ('Damon');
    // `);
    console.log("connection successful");
    client.release();
  } catch (err) {
    console.error("Error executing query", err.stack);
  }
}

insertTable();
