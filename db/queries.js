const pool = require("./pool");

async function getTopMangas() {
  const { rows } = await pool.query(
    "SELECT BookId, Title, Author, Genre, PublicationYear, Link FROM (SELECT *, ROW_NUMBER() OVER (PARTITION BY Genre ORDER BY BookId) as rn FROM Books) as RankedManga WHERE rn <= 3;"
  );
  return rows;
}

async function getShojo(Genre){
  const {rows} = await pool.query(
    "SELECT Title, Author, Genre, PublicationYear, Link FROM Books WHERE genre = $1 ",[Genre]
  );
  return rows;
}
async function add(manga_name, author, Genre, publication, link){
  await pool.query(
    "INSERT INTO Books (Title, Author, Genre, PublicationYear, Link) VALUES($1, $2, $3, $4, $5)",[manga_name, author, Genre, publication, link]
  );
  console.log("Added")
}
async function del(bookid){
  await pool.query(
    "DELETE FROM books WHERE bookid = $1",[bookid]
  );
  console.log("Added")
}


module.exports = { getTopMangas , getShojo , add, del};
