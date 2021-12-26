interface IMatchTeam {
    id: number;
    name: string;
    shortName: string;
    logo: string;
    logoId: number;
    league_id: number;
}

interface IMatchStadium {
    id: number;
    name: string;
    photoId: number;
    league_id: number;
}

export interface IMatch {
    id: number;
    date: Date;
    tourNumber: number
    teachDefeat: boolean;
    scoreFtHome: number;
    scoreFtAway: number;
    stadium: IMatchStadium;
    teamHome: IMatchTeam;
    teamAway: IMatchTeam;
}

export interface IMatchesProps {
    matches: IMatch[];
    loading: boolean;
    changePage: () => void;
}
