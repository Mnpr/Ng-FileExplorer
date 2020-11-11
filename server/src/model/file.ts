import fs from 'fs';

export class File {

    name: string;
    permission?: string;
    filepath?: string;

    constructor( n: string , p:string = 'owner' , fp: string = './' ) { 
        this.name = n;
        this.permission = p;
        this.filepath = fp + this.name;
    }


    getPermission ( ) {
        
        return console.log(`${this.name} has permission : ${this.permission}`)
    }

}

