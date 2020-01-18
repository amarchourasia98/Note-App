const fs = require('fs')
const chalk = require('chalk')


const addnote = (title,body) =>
{
    const notes = loadnote()
    const duplicatenote = notes.find((note) => note.title===title)


    if(!duplicatenote){
        notes.push({
            title:title,
            body:body
        })
        savenotes(notes)
        console.log(chalk.green.inverse('New note added!'))
      }
      else{
          console.log(chalk.red.inverse('Note title taken!'))
      }
    }

    const removenote = (title) =>
    {
      const notes = loadnote()
      const notestokeep = notes.filter((notes) => notes.title!==title)
          
      if(notes.length>notestokeep.length)
      {
          console.log(chalk.green.inverse('Note removed!'))
          savenotes(notestokeep)
      }
      else{
          console.log(chalk.red.inverse('No note found!'))
      }

}

const listnotes = () =>{
   const notes = loadnote()

   console.log(chalk.inverse('Your Notes'))
   
   notes.forEach((note) => {
       console.log(note.title)
   })
}

const readnotes = (title) => {
     const notes = loadnote()
     const note = notes.find((note) => note.title===title)

     if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body) 

     }else{
        console.log(chalk.red.inverse('Note not found!'))
     }
}
    
const savenotes = (notes) =>
{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadnote = () =>
{
    try{
      const databuffer = fs.readFileSync('notes.json')
      const dataJSON = databuffer.toString()
      return JSON.parse(dataJSON)
    }
    catch(e)
    {
        return[]
    }
}
module.exports = {
   addnote:addnote,
   removenote:removenote,
   listnotes:listnotes,
   readnotes:readnotes
}