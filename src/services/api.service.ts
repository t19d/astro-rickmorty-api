import type { ApiCharacterResponse } from "../models/api.model.ts";

const baseUrl = 'https://rickandmortyapi.com/api';
const charactersUrl = baseUrl + '/character';

export const getApiCharacters = async (currentPage?: number = 1): Promise<ApiCharacterResponse> => {
    const url = charactersUrl + `?page=${currentPage}`;
    const response = await fetch(url);
    return (await response.json()) as ApiCharacterResponse;
}