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

module.exports = { getTopMangas , getShojo };
