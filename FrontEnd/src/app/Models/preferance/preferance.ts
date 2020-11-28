import { Chercheurj } from '../chercheur/chercheurj';

export class Preferance {

    idpreferance: number;
    Distancehomeloctravail: number;
    TempsHS: number;
    DisponibliteDerM: boolean;
    TypeContartPrefere: string;
    chercheurJ: Chercheurj;


    constructor(idpreferance: number, Distancehomeloctravail: number, TempsHS: number,
        DisponibliteDerM: boolean, TypeContartPrefere: string, chercheurJ: Chercheurj,
    ) {
        this.idpreferance = idpreferance;
        this.Distancehomeloctravail = Distancehomeloctravail;
        this.TempsHS = TempsHS;
        this.DisponibliteDerM = DisponibliteDerM;
        this.TypeContartPrefere = TypeContartPrefere;
        this.chercheurJ = chercheurJ;




    }

}
