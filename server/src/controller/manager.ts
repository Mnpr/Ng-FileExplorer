import fs from 'fs';
import path from 'path';

import { File } from '../model/file';

let folder: File = new File('foldername');
let file: File = new File('hello.txt', 'owner','./foldername');

export class FileManager {


    getDir ( dir: string = './') {

        return fs.readdir(dir, (err, files) => {
            if (err) throw err;
            files.forEach(file => {
                console.log(file)
            })
        })

    }

    createDir(foldername: string = 'folder') {

        return fs.mkdir( foldername, { recursive: true }, (error) => {
            if (error) {
                console.log('error', error)
            } else {
                console.log(`${foldername} created successfully`)
            }
        })

    }

    createFile ( filename: string = './folder/hello.txt' ) {

        const data = new Uint8Array(Buffer.from('HI Node !'));
        return fs.writeFile(filename, data , err => {
            if (err) throw err;
            console.log(`${filename} created succesfully`)
        })
    }


    rename ( oldPath: string='./folder/hello.txt'
            , newPath: string = './folder/node.txt') 
    { 
        return fs.rename(oldPath, newPath, err =>{
            if (err) throw err;
            console.log('Rename Completed')
        })
    }

    delete ( filepath: string = './folder/node.txt') { 

        return fs.unlink(filepath, (err) => {
            if (err) throw err;
            console.log('Deletion Completed')
        })
    }

}


