import Image from "next/image";

interface PaginationParams {
  handleChangePage: (number: any) => void
  numberOfPages: number,
  currentPage: number;
}

export const Pagination = ({handleChangePage, currentPage, numberOfPages}: PaginationParams) => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-center">
          <nav className="flex space-x-2" aria-label="Pagination">
            {
              Array.from({ length: numberOfPages }).map((_: any, index: number)=>{
                const currentItemClass = currentPage === index + 1 ? "text-white bg-gray-700 border" : "text-gray-700 bg-white border";
                return (
                  <>
                    <button
                      onClick={()=>handleChangePage(index + 1)}
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${currentItemClass} border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10`}
                    >
                      {index + 1}
                    </button>
                  </>
                )
              })
            }
          </nav>
        </div>
      </div>
    </div>
  );
};
