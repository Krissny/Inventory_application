const db = require("../db/queries");
require("dotenv").config();
const notifier = require('node-notifier');

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
  await db.add(manga_name, author, Genre, publication, link);
  res.redirect('/')
}
exports.deleteManga = async(req, res)=>{
  const {key} = req.body;
  const bookid = req.params.bookid;
  // console.log(key)
  console.log(process.env.KEY)
  if(key == process.env.KEY){
    await db.del(bookid)
    res.send("<h1>Deletion successful</h1>")
  }
  res.send("<h1>Wrong key</h1>")

}
