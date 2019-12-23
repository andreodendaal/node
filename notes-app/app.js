const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

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
  handler: function (argv) {
    console.log('Adding title: ' + argv.title)
    console.log('Adding body: ' + argv.body)
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note')
  }
});

yargs.command({
  command: 'list',
  describe: 'Listing Notes',
  handler: function () {
    console.log('Listing notes')
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




