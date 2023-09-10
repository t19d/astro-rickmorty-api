import { useEffect, useState } from "preact/hooks";
import type { Character } from "../../models/api.model";
import { getApiCharacters } from "../../services/api.service.ts";
import CardCharacter from "./CardCharacter.tsx";
import Pagination from "../common/Pagination.tsx";

interface Props {}

export default function CharactersList() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [info, setInfo] = useState<any>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { results, info } = await getApiCharacters();
                setCharacters(results);
                setInfo(info);
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {characters && characters.length > 0 && (
                <section class="grid">
                    {characters.map((character: Character) => (
                        <CardCharacter character={character} />
                    ))}
                </section>
            )}
            <Pagination info={info} />
        </>
    );
}
