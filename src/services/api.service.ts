import type { ApiCharacterResponse, Character } from "../models/api.model.ts";

const baseUrl = 'https://rickandmortyapi.com/api';
const charactersUrl = baseUrl + '/character';

export const getApiCharacters = async (currentPage: number = 1): Promise<ApiCharacterResponse> => {
    const url = `${charactersUrl}?page=${currentPage}`;
    const response = await fetch(url);
    return (await response.json()) as ApiCharacterResponse;
}

export const getApiCharacter = async (id: string): Promise<Character> => {
    const url = `${charactersUrl}/${id}`;
    const response = await fetch(url);
    return (await response.json()) as Character;
}