import Link from "next/link";
import { CardProps } from "./types";
import Image from "next/image";

export const Card = ({ image, title, avatar, slug }: CardProps) => {
  return (
    <section className="bg-white  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
      <Link
        href="/blog/slug"
        className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
      ></Link>
      <div className="relative mb-4 rounded-2xl">
        <Image src={image} width={262} height={175} alt="image" />
        <Link
          className="flex justify-center items-center bg-red-700 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
          href={`/post/${slug}`}
          target="_self"
          rel="noopener noreferrer"
        >
          Ver conteúdo
        </Link>
      </div>
      <div className="flex justify-between items-center w-full pb-4 mb-auto">
        <div className="flex items-center">
          <div className="pr-3">
            <Image src={avatar} width={48} height={48} alt="Autor" />
          </div>
          <div className="flex flex-1">
            <div className="">
              <p className="text-sm text-gray-500">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
