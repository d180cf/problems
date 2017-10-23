export interface Problem {
    path: string; // relative paths, e.g. cc1/995.sgf
    toString(): string; // returns SGF, e.g. "(;SZ[9]AB[aa]...)"
}

export interface Directory {
    description: string;
    problems: Problem[];
}

export const dirs: Directory[];
export function toJSON(): string; // JSON.stringify works
