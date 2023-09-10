import type { Status } from "../../models/api.model.ts";

interface Props {
    status: Status;
    species: string;
}

export default function StatusSpecie({ status, species }: Props) {
    return (
        <div className="status-specie">
            <div className={`circle ${status.toLowerCase()}`}></div>&nbsp;<span>{status}</span>&nbsp;-&nbsp;<span>{species}</span>
        </div>
    );
}
