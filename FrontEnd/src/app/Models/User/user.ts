import { ImageModel } from '../ImageModel/image-model';

export class User {

    id: number;
    email: string;

    prenom: string;
    name: string;
    dateNaissance: Date;
    ville: string;
    numSecSoc: number;
    nationalite: string;
    telephone: number;
    status:boolean;
    ratingnote:number;
    codepostale: number;
    paysResidance: string;
    nbpersonnerat:number;
    imageModel:ImageModel;


        constructor(idC: number, prenom: string,
            nom: string, dateNaissance: Date, ville: string,
            numSecSoc: number, nationalite: string, email: string,status:boolean,ratingnote:number,
            telephone: number, codepostale: number, paysResidance: string,nbpersonnerat:number
         ) {
            this.id = idC;
            this.prenom = prenom;
            this.name = nom;
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
