import { Card } from "../Card";

export const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
