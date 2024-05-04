'use client';
import { Pagination } from "~/components/Pagination";
import { Cards } from "~/components/Cards";
import { CategloryList } from "~/components/CategoryList";
import { useEffect, useState } from "react";
import client from "~/utils/contentful";
import { CardProps } from "~/components/Card/types";
import { Category, FieldsPageBlogPost } from "~/models/contentful";
import { Categories } from "~/components/CategoryList/types";

const getImageUrl = (fileUrl: string) => {
 return fileUrl.replace("//", "https://"); 
}

export default function Home() {
  const [cards, setCards] = useState<CardProps[]>([]);
  useEffect(() => {
    client.getEntries({
      content_type: 'fiapBlogPost'
    }).then(resp => {
      const data = resp.items.map((item) => {
        const post = item as unknown as FieldsPageBlogPost;
        const image = getImageUrl(post.fields.previewPostImage.fields.file.url);
        const avatar = getImageUrl(post.fields.avatarPost.fields.file.url);
        
        return {
          image: image,
          title: post.fields.postTitle,
          slug: post.fields.postSlug,
          avatar: avatar,
        };
      });
      console.log(data)
      setCards(data);
    }).catch(error => console.error({ error }));
  }, []);

  const [categories, setCategories] = useState<Categories[]>([]);
  useEffect(() => {
    client.getEntries({
      content_type: 'fiapBlogCategory'
    }).then(resp => {
      const data = resp.items.map((item) => {
        const category = item as unknown as Category;
        return {
          title: category.fields.categoryTitle,
          slug: category.fields.categorySlug,
        }
      });
      setCategories(data);
    }).catch(error => console.error({ error }));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-3">
        <Cards items={cards} />
        <CategloryList categories={categories} />
      </div>
      <Pagination />
    </div>
  );
}
