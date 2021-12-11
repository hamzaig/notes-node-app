const chalk = require("chalk");
const { string } = require("yargs");
const yargs = require('yargs');
const notes = require("./notes.js");

//Customizing Yargs Version of App
yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
    // console.log(`${argv.title}: ${argv.body}`);
    // console.log(argv);
  }
});




yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
})
yargs.command({
  command: "list",
  describe: "show note list",
  handler() {
    notes.listNotes();
  }
})
yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
})

yargs.parse();
// console.log(yargs.argv);



