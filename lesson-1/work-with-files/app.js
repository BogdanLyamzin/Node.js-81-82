// import fs from "fs";
import fs from "fs/promises";

const func = async () => {
    const filepath = "./files/file.txt";

    try {
        // const buffer = await fs.readFile(filepath);
        // const text = buffer.toString();
        // console.log(text);
        // const text = await fs.readFile(filepath, "utf-8");
        // console.log(text);
        // await fs.appendFile(filepath, "\nPython forever");
        // await fs.appendFile("./files/file2.txt", "\nPython forever");
        // await fs.writeFile(filepath, "Mojo the best");
        // await fs.writeFile("./files/file3.txt", "Mojo the best");
        // await fs.unlink("./files/file3.txt");
    }
    catch (error) {
        console.log(error.message);
        throw error;
    }
}

func()

// fs.readFile("./files/file.txt")
//     .then(data => console.log(data))
//     .catch(errror => console.log(errror.message))

// fs.readFile("./files/file.txt", (error, data)=> {
//     console.log(error);
//     console.log(data);
//     fs.writeFile()
// })