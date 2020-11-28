import { Entreprise } from '../entreprise/entreprise';

export class Employe {
    Idemploye: number;
    prenom: String;
    nom: String;
    posteoccupe: String;
    postesurplatforme: String;
    Email: String;
    Telephone: number;
    entreprise: Entreprise;

    constructor(Idemploye: number, prenom: String, nom: String,
        posteoccupe: String, postesurplatforme: String, Email: String,
        Telephone: number, entreprise: Entreprise,) {
        this.Idemploye = Idemploye;
        this.prenom = prenom;
        this.nom = nom;
        this.posteoccupe = posteoccupe;
        this.postesurplatforme = postesurplatforme;
        this.Email = Email;
        this.Telephone = Telephone;
        this.entreprise = entreprise;



    }

}
