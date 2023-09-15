import { useEffect, useState } from "preact/hooks";
import { getApiCharacters } from "../../services/api.service.ts";
import { useStore } from "@nanostores/preact";
import { currentPage } from "../../stores/characters.store.ts";
import type { Character } from "../../models/api.model";
import CardCharacter from "./CardCharacter.tsx";
import Pagination from "../common/Pagination.tsx";

export default function GridCharacters() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [info, setInfo] = useState<any>({});
    const $currentPage = useStore(currentPage);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { results, info } = await getApiCharacters($currentPage);
                setCharacters(results);
                setInfo(info);
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
        };

        fetchData();
    }, [$currentPage]);

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
