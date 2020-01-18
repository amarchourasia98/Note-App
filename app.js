const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder: {
       title:{
           describe:'Note title',
           demandOption: true,
           type : 'string'
       },
       body:{
        describe:'Note body',
        demandOption: true,
        type : 'string'
    }
    },
    handler(argv){
        notes.addnote(argv.title,argv.body)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removenote(argv.title)
    }
})

//create list command
yargs.command({
    command:'list',
    describe:'list a note',
    handler(){
        notes.listnotes()
    }
})

//create read command
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
           describe:'Note title',
           demandOption:true,
           type:'string'
    }
},
    handler(argv){
        notes.readnotes(argv.title)
    }
})


yargs.parse()









