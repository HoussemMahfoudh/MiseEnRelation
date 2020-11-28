export class Disponibilte {

     IDdispo:number;
	 heuredeb:number;
     heurefin:number;
     jour:string
     
     
     constructor(IDdispo: number, heuredeb: number, heurefin: number,jour:string) {
        this.IDdispo = IDdispo;
        this.heuredeb = heuredeb;
        this.heurefin = heurefin;
        this.jour = jour;


    }
}
