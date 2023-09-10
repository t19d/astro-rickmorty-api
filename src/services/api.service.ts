import type { ApiCharacterResponse } from "../models/api.model.ts";

const baseUrl = 'https://rickandmortyapi.com/api';
const charactersUrl = baseUrl + '/character';

export const getApiCharacters = async (filters?: any): Promise<ApiCharacterResponse> => {
    const response = await fetch(charactersUrl);
    return (await response.json()) as ApiCharacterResponse;
}