export class Entreprise {
    idEntreprise: number;
    nomCommercial: String;
    raisonsocial: String;
    ActivitePrncipale: String;
    DomaineActivite: String;
    formejuridique: String;
    Slogan: String;
    numsert: number;
    numtva: number;
    RIB: number;

    constructor(idEntreprise: number, nomCommercial: String, raisonsocial: String,
        ActivitePrncipale: String, DomaineActivite: String, formejuridique: String,
        Slogan: String, numsert: number, numtva: number, RIB: number,) {
        this.idEntreprise = idEntreprise;
        this.nomCommercial = nomCommercial;
        this.raisonsocial = raisonsocial;
        this.ActivitePrncipale = ActivitePrncipale;
        this.DomaineActivite = DomaineActivite;
        this.formejuridique = formejuridique;
        this.Slogan = Slogan;
        this.numsert = numsert;
        this.numtva = numtva;
        this.RIB = RIB;



    }
}
