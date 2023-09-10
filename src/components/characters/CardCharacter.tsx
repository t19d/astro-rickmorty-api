import type { Character } from "../../models/api.model";
import StatusSpecie from "./StatusSpecie.tsx";

interface Props {
    character: Character;
}

export default function CardCharacter({ character }: Props) {
    return (
        <article className="card">
            <section className="img" style={`background-image: url(${character.image});`}></section>
            <section className="details">
                <article className="name">{character.name}</article>
                <StatusSpecie status={character.status} species={character.species} />
                <article className="location">
                    <span>Last known location:</span>
                    <span>{character.location.name}</span>
                </article>
            </section>
        </article>
    );
}
