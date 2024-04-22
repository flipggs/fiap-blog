import Link from "next/link";

export const Card = () => {
  return (
    <section className="bg-white  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
      <Link
        href="/blog/slug"
        className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
      ></Link>
      <div className="relative mb-4 rounded-2xl">
        <img
          className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
          src="https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      

        <a
          className="flex justify-center items-center bg-red-700 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
          href="/blog/slug"
          target="_self"
          rel="noopener noreferrer"
        >
          Ver conteúdo
        </a>
      </div>
      <div className="flex justify-between items-center w-full pb-4 mb-auto">
        <div className="flex items-center">
          <div className="pr-3">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src="https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
          <div className="flex flex-1">
            <div className="">
              <p className="text-sm text-gray-500">Título do post</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="text-sm flex items-center text-gray-500 ">
            2 dias atrás
            
          </div>
        </div>
      </div>
    </section>
  );
};
