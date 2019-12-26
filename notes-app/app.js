const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//
// Customize yargs version
yargs.version('1.1.0')

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    console.log('Calling addNotes: ' + argv.title + ' ' + argv.body)
    //notes.addNote(argv.title, argv.body)
    notes.addNotes(argv.title, argv.body)
     }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note')
  },
  handler(argv) {
    console.log('Calling removeNotes: ' + argv.title)
    notes.removeNotes(argv.title)
  }
});

yargs.command({
  command: 'list',
  describe: 'Listing Notes',
  handler(argv) {
    console.log('Getting Notes...')
    notes.listNotes(argv.title)
  }
});

yargs.command({
  command: 'read',
  describe: 'Reading a note',
  handler: function () {
    console.log('Reading a note')
  }
});

yargs.parse()




