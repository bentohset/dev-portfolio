"use server";

import { BlogSection } from '@/features/blogs'
import React from 'react'

export async function getBlogs() {
  const db_id = process.env.NOTION_DB_ID || "";
  const api_key = process.env.NOTION_API_KEY || "";

  const response = await fetch(`https://api.notion.com/v1/databases/${db_id}/query`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${api_key}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
    },
    body: JSON.stringify({
      filter: {
        "property": "Status",
        "status": {
          "equals": "Published"
        }
      },
      sorts: [
        {
          "property": "Publication Date",
          "direction": "ascending"
        }
      ]
    }),
  });

  if (!response.ok) {
    return {
      data: null,
      error: "Error loading blogs, please try again",
    };
  }

  const data = await response.json();

  return {
    data: data.results,
    error: null,
  };
}

const page = async () => {
  const { data, error } = await getBlogs();
  return (
    <div className='h-full flex w-full'>
      <BlogSection data={data} error={error}/>
    </div>
  )
}

export default page
