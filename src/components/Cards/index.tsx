import { Card } from "../Card";
import { ListCardsProps } from "./types";

export const Cards = ({ items }: ListCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto">
      {items.map((item) => (
        <Card key={item.slug} {...item} />
      ))}
    </div>
  );
};
