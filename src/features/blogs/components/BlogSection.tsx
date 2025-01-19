import React from 'react'

import { BlogGrid, BlogType, NotionMultiSelect, NotionObject } from '@/features/blogs';

type Props = {
  data: object[];
  error: string | null;
};

export const BlogSection = (props: Props) => {
  const blogs: BlogType[] = (props.data as NotionObject[]).map((o: NotionObject) => {
    const props = o.properties;
    const date = props['Publication Date'].date.start;
    const dateObject = new Date(date) ?? null;
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric"
    };
    const formattedDate = dateObject.toLocaleDateString("en-US", options) ?? "";
    const tags = props.Tags['multi_select']?.map((o: NotionMultiSelect) => o.name || "");
    return {
      title: props.Name.title[0]['plain_text'] || "",
      subtitle: props?.Subtitle?.rich_text[0]['plain_text'] || "",
      image: props.Image.files[0].file.url || "",
      url: props.URL.url || "",
      topics: tags,
      platform: props.Platform.select.name || "",
      date: formattedDate || "",
    };
  });

  return (
    <div className='w-full'>
      <h1 className='font-bold text-4xl'>My Blogs</h1>
      <div className='flex flex-col items-center justify-center w-full h-full py-8'>
        {props.error ? (
          <h1>{props.error}</h1>
        ) : (
          <BlogGrid data={blogs} />
        )}
      </div>
    </div>
  );
}
