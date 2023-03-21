import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LandingPage = () => {
  return (
    <div className="w-5/6 mx-auto min-h-screen">
      <section className="py-[2vmax] flex items-center justify-between max-[780px]:flex-col ">
        <div className="min-w-[300px]  whitespace-pre-wrap max-w-[650px]">
          <h1 className="text-4xl font-bold text-dark-purple ">Welcome to</h1>
          <h1 className="text-4xl font-bold text-dark-purple mb-4">
            Asrafuls Posts <span>👋</span>{' '}
          </h1>
          <p className="text-semi-purple text-xl font-medium mb-6 text-slate-600 mr-0 md:mr-16 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quae
            voluptatum ipsum nulla quaerat nesciunt deleniti? Aperiam tempora,
            nam porro officiis eum, aliquam voluptas libero rerum consequuntur
            veritatis inventore sequi.
          </p>
          <button>
            <Link
              href={'/posts'}
              // onClick={() => alert('Button clicked!')}
              className="px-8 py-3 mt-4 bg-[#7829df] rounded-md text-white uppercase hover:drop-shadow-md"
            >
              Posts
            </Link>
          </button>
        </div>
        {/* right section */}
        <div className="relative before:absolute before:top-10 before:-left-16 before:content-[url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=600')] before:w-[350px] before:-z-10 before:-rotate-6 before:bg-cover before:bg-center before:opacity-80">
          <Image
            src={
              'https://images.pexels.com/photos/14730593/pexels-photo-14730593.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            }
            alt="illustration-blog"
            width={600}
            height={600}
            className="min-w-[350px] mt-16 md:mt-0  "
            blurDataURL="data:..."
            placeholder="blur"
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
