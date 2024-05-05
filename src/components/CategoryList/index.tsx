import { Categories } from "./types"

export interface ListCategories {
  categories: Categories[];
  handleFilterPost: (categoryTitle: string) => void;
}

export const CategloryList = ({categories, handleFilterPost}: ListCategories) => {
  return (
    <div className="hidden md:flex flex-col gap-4">
      <h3 className="text-xl">Categorias</h3>
      <ul className="flex flex-col gap-2">
        <li>
            <a href={`#`} onClick={()=>handleFilterPost('reset')}>Todos os Posts</a>
        </li>
        {
          categories.map((category) => (
            <li key={category.slug}>
              <a href={`#`} onClick={()=>handleFilterPost(category.title)}>{category.title}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}