const fs = require('fs');

// interface FileConstructor {
//     create(): void;
//     read(): void;
//     rename(): void;
//     delete(): void;
// }

// interface FileInterface {
//     new ( name: string
//         , permission?: string
//         , filepath?: string
//         ) : FileConstructor
// }

export class File {

    name: string;
    permission?: string;
    filepath?: string;

    constructor( n: string , p:string = 'owner' , fp: string = '../../files/' ) { 
        this.name = n;
        this.permission = p;
        this.filepath = fp+this.name;
    }

    create ( filename: string = this.name ) {

        const data = new Uint8Array(Buffer.from('HI Node !'));
        return fs.writeFile(filename, data , err => {
            if (err) throw err;
            console.log(`${filename} created succesfully`)
        })
    }

    read ( filepath: string = this.filepath ) { 
        
        return fs.readFile(filepath, "utf8", (err, data) => {
            if (err) {
                return console.log(err);
            }
            console.log(data);
        })
    }

    rename ( filepath: string = this.filepath  ) { 
        
        let newPath = '../../files/node.txt'
        return fs.rename(filepath, newPath, err =>{
            if (err) throw err;
            console.log('Rename Completed')
        })
    }

    delete ( filepath: string = this.filepath ) { 

        return fs.unlink(filepath, (err) => {
            if (err) throw err;
            console.log('Deletion Completed')
        })
    }

}

/**
 *   Advanced Operations
 */

    //  Move() | Cut() | Copy() {

    // }

    // upload() {

    // }

    // download() {

    // }

    // assignPermission() {

    // }

    // getType () {
        
    // }
