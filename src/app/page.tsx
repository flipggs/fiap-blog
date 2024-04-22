import { Pagination } from "~/components/Pagination";
import { Cards } from "~/components/Cards";
import { CategloryList } from "~/components/CategoryList";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-3">
        <Cards />
        <CategloryList />
      </div>
      <Pagination />
    </div>
  );
}
