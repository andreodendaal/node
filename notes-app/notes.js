
// Create getNotes function that returns "Your notes..."
// export getNotes Function
// From app.js load and call the function printing the message to the console
const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
    //get note from file
    const fileName = 'notes.json'
    const notes = getNotes(fileName)

    const duplicateNote = notes.find((note) => { return note.title === title })
    if (!duplicateNote) {
        notes.push(
        {title: title,
         body: body}
        )
        //If note does not exist, add note
        console.log('Adding Note.. ' + title +' to File: ' + fileName)
        saveNotes(notes, fileName)
        console.log(chalk.inverse.green('Added Note.. ' + title +' to File: ' + fileName))

    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const getNotes = function(file){
    console.log('Checking for file .. ' + file)
    try {
        const dataBuffer = fs.readFileSync(file)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        //if file does not exist return blank structure
        return []
    }
}
const saveNotes = (notes, fileName) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync(fileName, dataJSON)
}

const removeNotes = (title) => {
    console.log('Deleting Note: ' + title)
    const fileName = 'notes.json'
    const notes = getNotes(fileName)
    const adjustedNotes = notes.filter((note) => note.title != title)
    if (notes.length > adjustedNotes.length) {

        saveNotes(adjustedNotes, fileName)
        console.log(chalk.inverse.green('Deleted Note: ' + title + ', from File: ' + fileName))
    } else {
        console.log(chalk.inverse.red('Note: ' + title + ', not Found'))
    }
}
const listNotes = () => {
    const fileName = 'notes.json'
    const notes = getNotes(fileName)
    console.log(notes)
}

module.exports = {
    addNotes: addNotes,
    listNotes: listNotes,
    removeNotes: removeNotes
}
