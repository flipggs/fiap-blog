import { Card } from "../Card";
import { Pagination } from "../Pagination";
import { ListCardsProps } from "./types";

export const Cards = ({ items, numberOfPages, currentPage, handleChangePage }: ListCardsProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto">
        {items.map((item) => (
          <Card key={item.slug} {...item} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Pagination currentPage={currentPage} handleChangePage={handleChangePage} numberOfPages={numberOfPages} />
      </div>
    </div>
  );
};
