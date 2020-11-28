import { Chercheurj } from '../chercheur/chercheurj';
import { Mission } from '../Jobs/mission';

export class Candidature {
    IdCandidature: number;
    BudgetDemande: number;
    DescCompetances: String;
    chercheur: Chercheurj;
    mission: Mission;

    constructor(IdCandidature: number, BudgetDemande: number, DescCompetances: String, chercheur: Chercheurj, mission: Mission) {
        this.IdCandidature = IdCandidature;
        this.BudgetDemande = BudgetDemande;
        this.DescCompetances = DescCompetances;
        this.chercheur = chercheur;
        this.mission = mission;
    }
    
}
