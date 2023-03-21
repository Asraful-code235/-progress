'use client';

import CustomError from '@/components/error';
import LayoutComponent from '@/components/Layout';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter, notFound } from 'next/navigation';

import React from 'react';
import Error from './error';
export const dynamicParams = true;

async function getPostDetails(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    return 'SomeThing went wrong';
  }

  const data = await res.json();
  return data;
}

const PostsDetails = ({ params: { id } }) => {
  const { push } = useRouter();
  const {
    data: postDetails,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['postDetails', id],
    queryFn: () => getPostDetails(id),
    keepPreviousData: true,
  });

  if (isNaN(Number(id)) && !postDetails) {
    // push('/login');
    return notFound();
  }

  if (isLoading && !postDetails) {
    return 'Loading...';
  }

  if (isError) {
    return 'Something went wrong';
  }
  return (
    <>
      {/* <CustomError /> */}
      <section className="w-5/6 mx-auto   mt-24 px-3 py-12 gap-2 rounded-md ">
        <button
          onClick={() => push('/posts')}
          className="underline text-slate-500  cursor-pointer mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </button>
        <Image
          src={
            'https://images.pexels.com/photos/14730593/pexels-photo-14730593.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          }
          alt={'image-blog'}
          width={400}
          blurDataURL="data:..."
          placeholder="blur"
          height={400}
          className="w-full h-[40vmax] object-center object-cover"
        />
        <div className="flex  gap-2 mt-4  rounded-md">
          {['Category1', 'Category1'].map((data, i) => (
            <div
              className="bg-gray-400 rounded-md font-semibold text-white p-2"
              key={data + i}
            >
              {data}
            </div>
          ))}
        </div>
        <h1 className="text-2xl font-semibold capitalize mt-4">
          {postDetails.title}
        </h1>
        <article className="mt-4 text-xl text-slate-400 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          asperiores corrupti labore provident et quae voluptatum? In expedita
          dolor earum incidunt id magni. Facere, unde magnam eligendi debitis
          facilis libero.
        </article>
        <button
          onClick={() => {
            Error();
          }}
        >
          Click for error
        </button>
      </section>
    </>
  );
};

export default PostsDetails;

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums');
  const albums = await res.json();

  return albums.map((album) => {
    id: album.id.toString();
  });
}
