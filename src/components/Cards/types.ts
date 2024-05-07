import { CardProps } from "../Card/types";

export interface ListCardsProps {
  items: CardProps[];
  currentPage: number;
  numberOfPages: number;
  handleChangePage: (number: any) => void;
}