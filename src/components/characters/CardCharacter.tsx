import type { Character } from "../../models/api.model";
import StatusSpecie from "./StatusSpecie.tsx";

interface Props {
    character: Character;
}

export default function CardCharacter({ character }: Props) {
    return (
        <article className="card" style={`background-image: url(${character.image});`}>
            <div className="details">
                <span className="name">{character.name}</span>
                <StatusSpecie status={character.status} species={character.species} />
            </div>
        </article>
    );
}
