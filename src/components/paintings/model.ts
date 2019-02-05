/**
 * Request and Result interfaces from the Painting Api
 */

export interface Painting {
    id: string;
    artist: string;
    url: string;
    name: string;
    techniques: string[];
    dateModified: string;
    dateCreated: string;
}

    