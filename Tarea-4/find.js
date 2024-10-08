import { readFile } from "fs/promises";

const path = "numeros.txt";

const readNumbers = async () => {
  try {
    const data = await readFile(path, "utf8");
    const numbers = data.split("\n");

    numbers.forEach((numberString) => {
      const evenNumbers = parseInt(numberString.trim());
      if (!isNaN(evenNumbers) && evenNumbers % 2 === 0) {
        console.log(evenNumbers);
      }
    });
  } catch (error) {
    console.log(error, " hay un error en la cosola");
  }
};
readNumbers();
