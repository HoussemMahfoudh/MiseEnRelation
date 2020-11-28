import { Categorie } from '../categorie/categorie';

export class Typetravail {

    idtypetravail: number;
    nomtype: String;
    categorie: Categorie;

    constructor(idtypetravail: number, nomtype: String, categorie: Categorie) {
        this.idtypetravail = idtypetravail;
        this.nomtype = nomtype;
        this.categorie = categorie;

    }
}
