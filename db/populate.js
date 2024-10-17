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
      ('Lone Wolf and Cub', 'Kazuo Koike', 'Gekiga', 1970, 'https://m.media-amazon.com/images/I/711paX0IgTL._AC_UF1000,1000_QL80_.jpg'),
      ('The Push Man and Other Stories', 'Yoshihiro Tatsumi', 'Gekiga', 1969, 'https://m.media-amazon.com/images/I/81xA2HfbtWL._AC_UF1000,1000_QL80_.jpg'),
      ('A Drifting Life', 'Yoshihiro Tatsumi', 'Gekiga', 2008, 'https://upload.wikimedia.org/wikipedia/en/6/6f/A_Drifting_Life.jpg'),
      ('Red Colored Elegy', 'Seiichi Hayashi', 'Gekiga', 1970, 'https://m.media-amazon.com/images/I/71qgFd+283L._AC_UF1000,1000_QL80_.jpg'),
      ('Good-Bye', 'Yoshihiro Tatsumi', 'Gekiga', 1971, 'https://goodbye-eri.com/wp-content/uploads/2022/10/img1-2-675x1024.jpg');
  `);
    console.log("connection successful");
    client.release();
  } catch (err) {
    console.error("Error executing query", err.stack);
  }
}

insertTable();
