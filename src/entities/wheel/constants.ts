export const sectorsData = [
    { value: 10, colour: '#10c569', probability: 100 },
    { value: 5, colour: '#0694d4', probability: 100 },
    { value: 100, colour: '#f34a3a', probability: 100 },
    { value: 50, colour: '#f6bd0d', probability: 100 },
    { value: 10, colour: '#10c569', probability: 100 },
    { value: 5, colour: '#0694d4', probability: 100 },
    { value: 100, colour: '#f34a3a', probability: 100 },
    { value: 50, colour: '#f6bd0d', probability: 100 },
    { value: 10, colour: '#10c569', probability: 100 },
    { value: 5, colour: '#0694d4', probability: 100 },
] as SectorData[];

export type SectorData = {
    value: number;
    colour: string;
    probability?: number;
};

