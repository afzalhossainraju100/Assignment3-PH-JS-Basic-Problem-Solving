/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here
var fileName = "result.pdf";
var fileName = "data.docx";
var fileName = "#exp.mp4";
var fileName = "docx.txt";
var fileName = "docx.xpdf";
var fileName = "slipdf.txt";

if (fileName[0] === "#") {
  console.log("Store");
} else {
  fileName.split("");
  for (let i = 0; i < fileName.length; i++) {
    if (fileName[i] === ".") {
      if (fileName.slice(i + 1, fileName.length) === "pdf") {
        console.log("Store");
      } else if (fileName.slice(i + 1, fileName.length) === "docx") {
        console.log("Store");
      } else {
        console.log("Delete");
      }
    }
  }
}