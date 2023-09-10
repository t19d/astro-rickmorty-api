import type { Info } from "../../models/api.model.ts";
import { useStore } from "@nanostores/preact";
import { currentPage } from "../../stores/characters.store.ts";

interface Props {
    info: Info;
}

export default function Pagination({ info }: Props) {
    let $currentPage = useStore(currentPage);
    const { count, pages, next, prev } = info;

    return (
        <section>
            <nav className="pagination">
                <button
                    disabled={$currentPage <= 1}
                    onClick={() => {
                        if ($currentPage > 1) currentPage.set(--$currentPage);
                    }}
                >
                    Previous
                </button>
                <span>
                    {$currentPage}/{pages}
                </span>
                <button
                    disabled={$currentPage >= pages}
                    onClick={() => {
                        if ($currentPage < pages) currentPage.set(++$currentPage);
                    }}
                >
                    Next
                </button>
            </nav>
        </section>
    );
}
