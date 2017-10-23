export interface Manifest    {
    time: Date;
    dirs: any[];
};

/** Reads all SGF files and returns a JSON with paths to them. */
export function getManifest(): Manifest;
