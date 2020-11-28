import { Entreprise } from '../entreprise/entreprise';

export class Reseauxsoci {

    IDres: number;
    NomRes: String;
    Lien: String;
    entreprise: Entreprise;


    constructor(IDres: number, NomRes: String, Lien: String,
        entreprise: Entreprise) {
        this.IDres = IDres;
        this.NomRes = NomRes;
        this.Lien = Lien;
        this.entreprise = entreprise;
    }

}
