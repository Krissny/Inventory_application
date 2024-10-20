const db = require("../db/queries");

exports.firstload = async (req, res) => {
  const top_mangas = await db.getTopMangas();
  console.log(top_mangas);
  res.render("index", {top_mangas: top_mangas});
};

exports.getShojo = async(req, res)=>{
  console.log(req.params.Genre);
  const shojo_mangas = await db.getShojo(req.params.Genre);
  res.render("index", {top_mangas : shojo_mangas});
}

exports.getForm = async(req, res)=>{
  // console.log("it runs")
  res.render('new');
}

exports.addManga = async(req, res)=>{
  const {manga_name, author, Genre , publication , link} = req.body;
  console.log({manga_name, author, Genre , publication , link})
  // await db.add(manga_name, author, Genre, publication, link);
  res.redirect('/')
}
