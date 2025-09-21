export type Attack = {
    name: string;
    type: string;
    damage: number
};

export type Evolution = {
    id: string;
    number?: string;
    name: string;
    image: string;
    types: string[];
};

export type Pokemon = {
    id: string;
    number: string;
    name: string;
    image: string;
    types: string[];
    classification: string;
    attacks: {
        fast: Attack[];
        special: Attack[];
    };
    evolutions?: Evolution[];
};
