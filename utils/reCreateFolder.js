import fs from "fs";

export function reCreateFolder(address) {
  try {
    fs.mkdirSync(address);
    console.log("📂 output folder created!");
  } catch {
    console.log("📁 output folder found!");
  }
}
