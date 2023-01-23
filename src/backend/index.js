import { ipcMain } from "electron";

const pathsToRows = require("./pathsToRows");
const prepareData = require("./prepareData");
const groupWords = require("./groupWords");

ipcMain.on("processSubTitles", (event, paths) => {
  //o reply event tá lançando o evento para o channel //processSubTitles// q está sendo escutado pelo o frontend
  pathsToRows(paths)
    .then((rows) => prepareData(rows))
    .then((words) => groupWords(words))
    .then((groupedWords) => event.reply("processSubTitles", groupedWords));
});
