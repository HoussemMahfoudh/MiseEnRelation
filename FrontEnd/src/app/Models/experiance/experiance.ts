export class Experiance {

    idExper: number;
    nomentreprise: String;
    Domaine: String;
    posteoccupe: String;
    Datedeb: Date;
    DateFin: Date;
    Competances: String;
    Description: String;


    constructor(idExper: number, nomentreprise: String, Domaine: String,
        posteoccupe: String, Datedeb: Date, DateFin: Date,
        Competances: String, Description: String,) {
        this.idExper = idExper;
        this.nomentreprise = nomentreprise;
        this.Domaine = Domaine;
        this.posteoccupe = posteoccupe;
        this.Datedeb = Datedeb;
        this.DateFin = DateFin;
        this.Competances = Competances;
        this.Description = Description;



    }

}
