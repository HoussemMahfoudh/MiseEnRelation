
export class Chercheurj {

    idC: number;
    prenom: String;
    nom: String;
    dateNaissance: Date;
    ville: String;
    numSecSoc: number;
    nationalite: String;
    email: String;
    telephone: number;
    status:boolean;
    ratingnote:number;
    codepostale: number;
    paysResidance: String;
    nbpersonnerat:number;
    image:any;



    constructor(idC: number, prenom: String,
        nom: String, dateNaissance: Date, ville: String,
        numSecSoc: number, nationalite: String, email: String,status:boolean,ratingnote:number,
        telephone: number, codepostale: number, paysResidance: String,nbpersonnerat:number
     ) {
        this.idC = idC;
        this.prenom = prenom;
        this.nom = nom;
        this.dateNaissance = dateNaissance;
        this.ville = ville;
        this.numSecSoc = numSecSoc;
        this.nationalite = nationalite;
        this.email = email;
        this.nbpersonnerat = nbpersonnerat;
        this.status = status;
        this.ratingnote = ratingnote;
        this.telephone = telephone;
        this.codepostale = codepostale;
        this.paysResidance = paysResidance;

    }
}

