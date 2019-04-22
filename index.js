const fs = require("mz/fs");

const PATH = "C:/Users/win10/Desktop/Fisher";
const methodSignatureRegex = /^([ \t]*)([A-z0-9]+|([A-z0-9](\||))+) ([A-z0-9]*)(\(| \()((([A-z](\||))+ [A-z]+(, |,|))*|| )\)/g;
const classRegex = /class [A-z0-9]*/g;
const classFieldsRegex = /([ \t]*)([A-z0-9]*) ([A-z0-9]*)\;/g;
const protectedClassFieldsRegex = /([ \t]*)protected ([A-z0-9]*) ([A-z0-9]*)\;/g;

(async () => {
  try {
    let t = await metaData();
    let final = "";
    t.flat().forEach(s => {
      if (s) {
        final += constructReadme(s);
      }
    });
    fs.writeFile("README.md", final);
  } catch(e) {
    console.error(e);
  }
})();

async function metaData() {
  let files = await fs.readdir(PATH);
  let toReturn = [];
  let folders = files.filter(path => !path.includes("."));
  let filesWithExt = files.filter(path => path.includes("."));

  return await Promise.all(folders.map(async p => {
    let folderFiles = await fs.readdir(`${PATH}/${p}`);
    return Promise.all(folderFiles.map(async pikeFile => {
      if (!pikeFile.includes(".pike")) return;
      let readableFile = await fs.readFile(`${PATH}/${p}/${pikeFile}`);
      let separateLines = readableFile.toString().split("\r\n");
      let toWrite = {
        "class": pikeFile.replace(".pike", ""),
        "signatures": separateLines.filter(line => line.match(methodSignatureRegex))
      };

      return toWrite;
    }));
  }));
}

function constructReadme(data) {
  if (!data.signatures.length) return "";
  let start = `\n### ${data.class}`;
  // console.log(data);
  data.signatures.forEach(line => {
    start = start + `\n${constructCodeBlock(line)}`;
  });

  return start;
}

function constructCodeBlock(data) {
  return "```pike\n"+data.trim()+"\n```";
}

function constructHeaders(functionName) {
  return `#### ${functionName}`;
}
