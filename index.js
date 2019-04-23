const fs = require("mz/fs");

const PATH = "C:/Users/win10/Desktop/Fisher";
const methodSignatureRegex = /^([ \t]*)([A-z0-9]+|([A-z0-9](\||\([A-z0-9]*\)(\||)|))+) ([A-z0-9]*)(\(| \()((([A-z](\||))+ [A-z]+(, |,|))*|| )\) {/g;
const classRegex = /class [A-z0-9]*/g;
const classFieldsRegex = /^([ \t]*)(([A-z0-9](\.)?([A-z0-9](\|)|)*)+)(?<!return)(?<!inherit) ([A-z0-9]*)\;$/g
const protectedClassFieldsRegex = /^([ \t]*)protected ([A-z0-9]*) ([A-z0-9]*)\;$/g;

(async () => {
  try {
    let t = await metaData();
    let hyperLinks = ["## This was automatically generated!\n"];
    let content = [];
    t.flat().forEach(s => {
      if (s) {
        hyperLinks.push(`- [${s.class}](https://github.com/theonlyartz/FisherDocParser/blob/master/README.md#${s.class})\n`);
        content.push(constructReadme(s));
      }
    });
    hyperLinks = hyperLinks.concat(content);
    fs.writeFile("README.md", hyperLinks.join(""));
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
      // console.log(separateLines.filter(s => classFieldsRegex.test(s)));
      let toWrite = {
        "class": pikeFile.replace(".pike", ""),
        "signatures": separateLines.filter(line => line.match(methodSignatureRegex)),
        "classFields": separateLines.filter(line => line.match(classFieldsRegex)),
        "protectedClassFields": separateLines.filter(line => line.match(protectedClassFieldsRegex)),
      };
      return toWrite;
    }));
  }));
}

function constructReadme(data) {
  if (!data.signatures.length) return "";
  let start = `\n### ${data.class}\n`;
  // console.log(data);
  start += constructClassFields(data);
  start += "\n#### Method Signatures\n";
  data.signatures.forEach(line => {
    start += `\n${constructCodeBlock(line)}`;
  });

  return start;
}

function constructCodeBlock(data) {
  return "```pike\n"+data.trim().replace(" {", ";")+"\n```";
}

function constructClassFields(data) {
  let str = [
    "#### Class variables",
    "```pike",
  ];
  if (data.protectedClassFields.length)
    str.push("// Public");
  data.classFields.forEach(variable => {
    str.push(variable.trim() + "");
  });

  if (data.protectedClassFields.length != 0) {
    str.push("// Private");
  }
  data.protectedClassFields.forEach(variable => {
    str.push(variable.trim() + "");

  });

  str.push("```")

  return str.join("\n");
}

function constructHeaders(functionName) {
  return `#### ${functionName}`;
}
