import yargs from "yargs";
import {addUser, readUser, updateUser, deleteUser} from "./utilities.js";

const yrgs = yargs(process.argv.slice(2));
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
yrgs.command({
  command: "add",
  describe: "add a new user",
  builder: {
    id: {
      describe: "id",
      demandOption: false,
      type: "string",
    },
    name: {
      describe: "name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "email",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    addUser(argv.name, argv.email);
  },
});
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
yrgs.command({
  command: "update",
  describe: "Update user name",
  builder: {
    id: {
      describe: "id",
      demandOption: false,
      type: "string",
    },
    newName: {
      describe: "Update user name",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    updateUser(argv.id, argv.newName);
  },
});
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
yrgs.command({
  command: "read",
  describe: "Read user",
  builder: {
    id: {
      describe: "id",
      demandOption: false,
      type: "string",
    },
  },
  handler: function (argv) {
    readUser(argv.id);
  },
});
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
yrgs.command({
  command: "remove",
  describe: "Remove a user",
  builder: {
    id: {
      describe: "id",
      demandOption: false,
      type: "string",
    },
  },
  handler: function (argv) {
    deleteUser(argv.id);
  },
});
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
yrgs.parse();
