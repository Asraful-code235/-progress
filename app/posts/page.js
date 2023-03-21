'use client';

import { useEffect } from 'react';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

async function fetchTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums');
  const data = await res.json();
  return data;
}

export default function Posts({ dehydratedState }) {
  const router = useRouter();
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchTodos(),
    keepPreviousData: true,
    // initialData: prefetched,
  });

  if (isLoading && !posts) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading...</div>;
  }
  return (
    <>
      <main className="grid grid-cols-1 justify-items-stretch  md:grid-cols-3 gap-2   rounded-md w-5/6 mx-auto mt-12  ">
        {posts.map((todo) => (
          <Link
            className=" pb-12  border  min-h-[90px] "
            href={`/posts/${todo.id}`}
            key={todo.id}
          >
            <Image
              src={
                'https://images.pexels.com/photos/14730593/pexels-photo-14730593.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
              }
              alt={todo.title}
              width={400}
              blurDataURL="data:..."
              placeholder="blur"
              height={400}
              className="w-full"
            />
            <h1
              className="whitespace-wrap text-slate-900 mt-2 first-letter:
             uppercase font-semibold  text-xl font-sans p-2
            "
            >
              {todo.title}
            </h1>
            <p className="mt-2 text-slate-400 text-base font-medium px-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit...
            </p>
          </Link>
        ))}
      </main>
    </>
  );
}
