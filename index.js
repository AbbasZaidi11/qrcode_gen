/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
let user_input;
inquirer
  .prompt([
    {
      name: "greeting",
      message: "What would you like to say?",
      type: "input",
    },
  ])
  .then(function (answer) {
    console.log(answer.greeting);
    fs.writeFile(
      "C:/Users/Abbas/Desktop/dev2/qrcodegen/newfile.txt",
      answer.greeting,
      (err) => {
        if (err) {
          console.log(data);
        }
      }
    );
    var qr_svg = qr.image(answer.greeting, { type: "png" });
    qr_svg.pipe(fs.createWriteStream("i_love_qr.png"));
  });
