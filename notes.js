const fs = require("fs");
const chalk = require("chalk");

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find(note => {
    return note.title === title;
  })
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(chalk.blueBright(note.body));
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
}


const getNotes = () => {
  return "Your Notes";
};

const listNotes = () => {
  notes = loadNotes();
  console.log(chalk.blue.bold.inverse("Your Notes"));
  notes.forEach((note, i) => {
    console.log((i + 1) + " " + chalk.greenBright.inverse(note.title));
  })
}


const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => {
    return (note.title).toLowerCase() === title.toLowerCase();
  })

  if (!duplicateNote) {

    notes.push({
      title,
      body
    });
    // console.log(notes);
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added."));
  } else {
    console.log(chalk.red.inverse("Title already taken."));
  }
}

const removeNote = (title) => {
  console.log("h");
  const notes = loadNotes();
  const newNotes = notes.filter((note) => {
    return (note.title).toLowerCase() !== title.toLowerCase();
  })

  if (notes.length > newNotes.length) {
    saveNotes(newNotes);
    console.log(chalk.green.inverse(`${title} note is removed.`));
  } else {
    console.log(chalk.red.inverse(`${title} note is not removed.`));
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
}


const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}




module.exports = {
  addNote,
  getNotes,
  removeNote,
  listNotes,
  readNote,
}