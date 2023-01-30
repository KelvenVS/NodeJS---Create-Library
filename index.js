import fs from 'fs';
import chalk from 'chalk';
// const chalk= require('chalk'); // old-version -- other way

function handlingError(fault) {
    console.log(fault);
    throw new Error(chalk.red(fault.code, 'Não há arquivo no diretório'));
}

// aSync/aWait

async function bringfile(pathFile){
  const encoding = 'utf-8';
  const text = await fs.promises.readFile(pathFile , encoding);{
    console.log(chalk.red(text)); // "Promise { <pending> }" if async alone
  }
}

// //promises .then()
// function bringfile(pathFile){
//     const encoding = 'utf-8';
//     fs.promises.readFile(pathFile , encoding)
//       .then((text) => console.log(chalk.green(text)))
//         .catch((fault) => handlingError(fault));
//         // .catch(handlingError);
// }

bringfile('./arquivos/text.md');