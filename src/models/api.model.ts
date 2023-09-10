export interface ApiCharacterResponse {
    info: Info
    results: Character[]
}

export interface ApiLocationResponse {
    info: Info
    results: Location[]
}

export interface ApiEpisodeResponse {
    info: Info
    results: Episode[]
}

export interface Info {
    count: number
    pages: number
    next: string
    prev: any
}

export interface Character {
    id: number
    name: string
    status: Status
    species: string
    type: string
    gender: Gender
    origin: Origin
    location: Location
    image: string
    episode: string[]
    url: string
    created: string
}

export interface Origin {
    name: string
    url: string
}

export interface Location {
    id?: number
    name: string
    type?: string
    dimension?: string
    residents?: string[]
    url: string
    created?: string
}

export interface Episode {
    id: number
    name: string
    air_date: string
    episode: string
    characters: string[]
    url: string
    created: string
}

export type Status = 'Alive' | 'Dead' | 'unknown';
export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';
