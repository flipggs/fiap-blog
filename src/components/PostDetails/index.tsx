import { PostDetails } from "../PostDetails/types";
import { useEffect, useState } from "react";
import client from "~/utils/contentful";
import { FieldsPageBlogPost } from "~/models/contentful";

export interface IPostDetails {
    slug: string
}

export const PostDetail = ({slug}: IPostDetails) => {
    
    const [post, setPost] = useState<PostDetails>();
    useEffect(() => {
      client.getEntries({
        content_type: 'fiapBlogPost',
        'fields.postSlug': slug
      }).then(resp => {
        const data = resp.items.map((item) => {
          const post = item as unknown as FieldsPageBlogPost;
            
            let finalContent: string[] = []
            post.fields.postContent.content.forEach((x) => {
                let paragraphContent = ''
                x.content.forEach((y) => {
                    paragraphContent = paragraphContent.concat(y.value)
                })
                finalContent.push(paragraphContent)
            })

          return {
            title: post.fields.postTitle,
            slug: post.fields.postSlug,
            content: finalContent

          };
        });
        setPost(data[0]);
      }).catch(error => console.error({ error }));
    }, []);
    
    
    return (
        <div className="container max-w-5xl mx-auto -mt-32">
            <div className="mx-0 sm:mx-6">
                <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal" >
                    <p className="text-2xl md:text-3xl mb-5">
                        {
                            post?.title
                        }
                    </p>
                        {
                        post?.content.map((content, index) => {
                            return (
                                <>
                                    <p key={index}>
                                        {content}
                                    </p>
                                    <br/>
                                </>
                            )
                        })
                        }
                </div>
            </div>
        </div>
    )
}