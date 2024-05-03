'use client';
import { Pagination } from "~/components/Pagination";
import { Cards } from "~/components/Cards";
import { CategloryList } from "~/components/CategoryList";
import { useEffect, useState } from "react";
import client from "~/utils/contentful";
import { CardProps } from "~/components/Card/types";
import { FieldsPageBlogPost } from "~/models/contentful";

const getImageUrl = (fileUrl: string) => {
 return fileUrl.replace("//", "https://"); 
}

export default function Home() {
  const [cards, setCards] = useState<CardProps[]>([]);
  useEffect(() => {
    client.getEntries({
      content_type: 'pageBlogPost'
    }).then(resp => {
      const data = resp.items.map((item) => {
        const fields = item.fields as unknown as FieldsPageBlogPost;
        const avatar = getImageUrl(fields.author.fields.avatar.fields.file.url);
        const image = getImageUrl(fields.seoFields.fields.shareImages[0].fields.file.url);
        
        return {
          image: image,
          title: fields.title,
          authorAvatar: avatar,
          slug: fields.slug,
        };
      });
      setCards(data);
    }).catch(error => console.error({ error }));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-3">
        <Cards items={cards} />
        <CategloryList />
      </div>
      <Pagination />
    </div>
  );
}
