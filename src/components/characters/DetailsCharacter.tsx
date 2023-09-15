import { useEffect, useState } from "preact/hooks";
import { getApiCharacter } from "../../services/api.service.ts";
import type { Character } from "../../models/api.model";

interface Props {
    id: string;
}

export default function DetailsCharacter({ id }: Props) {
    const [character, setCharacter] = useState<Character>();
    const [info, setInfo] = useState<any>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                setCharacter(await getApiCharacter(id));
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <>
            {character && (
                <div>
                    <img src={character.image} alt={character.name} />
                    <div className="details">
                        <span className="name">{character.name}</span>
                    </div>
                </div>
            )}
        </>
    );
}
