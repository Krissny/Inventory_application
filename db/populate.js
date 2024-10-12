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
      INSERT INTO Books (Title, Author, Genre, PublicationYear, Link) VALUES
      ('Dune', 'Frank Herbert', 'Sci-Fi', 1965, 'http://example.com/dune'),
      ('Pride and Prejudice', 'Jane Austen', 'Romance', 1813, 'http://example.com/pride-and-prejudice'),
      ('Harry Potter and the Sorcerer Stone', 'J.K. Rowling', 'Fantasy', 1997, 'http://example.com/harry-potter'),
      ('1984', 'George Orwell', 'Sci-Fi', 1949, 'http://example.com/1984'),
      ('The Great Gatsby', 'F. Scott Fitzgerald', 'Romance', 1925, 'http://example.com/the-great-gatsby'),
      ('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 1937, 'http://example.com/the-hobbit');
    `);
    console.log("connection successful");
    client.release();
  } catch (err) {
    console.error("Error executing query", err.stack);
  }
}

insertTable();
