import { Categories } from "./types"

export interface ListCategories {
  categories: Categories[];
}

export const CategloryList = ({categories}: ListCategories) => {
  return (
    <div className="hidden md:flex flex-col gap-4">
      <h3 className="text-xl">Categorias</h3>
      <ul className="flex flex-col gap-2">
        {
          categories.map((category) => (
            <li key={category.slug}>
              <a href={`/category/${category.slug}`}>{category.title}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}