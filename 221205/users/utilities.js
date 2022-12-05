import fs from "fs";
import uniqid from "uniqid";
import chalk from "chalk";
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const loadUser = function () {
  try {
    const data = fs.readFileSync("users.json");
    const dataJSON = data.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const saveUser = function (users) {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync("users.json", dataJSON);
};
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const addUser = function (name, email) {
  const users = loadUser();
  const userExist = users.filter(user => user.name === name);
  if (userExist.length === 0) {
    users.push({
      id: uniqid(),
      name,
      email,
    });
    saveUser(users);
    console.log(chalk.bold.green("User added."));
  } else {
    console.log(chalk.bold.red("User already exist."));
  }
};
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const readUser = (id) => {
  const users = loadUser();
  const user = users.find((user) => user.id === id);

  if (user) {
    console.log(chalk.bold.green(user.name));
  } else {
    console.log(chalk.bold.red("User not found."));
  }
};
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const updateUser = (id, newName) => {
  const users = loadUser();
  const user = users.find((user) => user.id === id);
  user.name = newName;
  console.log(chalk.green(`User ${id} has been updated`));
  saveUser(users);
};
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const deleteUser = (id) => {
  const users = loadUser();
  const keptUsers = users.filter(user => user.id !== id);

  if (users.length > keptUsers.length) {
    saveUser(keptUsers);
    console.log(chalk.bold.green("User emoved"));
  } else {
    console.log(chalk.bold.red("User was not found"));
  }
};



export { addUser, readUser, updateUser, deleteUser };
