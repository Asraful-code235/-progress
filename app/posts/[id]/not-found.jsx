import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="grid place-items-center min-h-screen -mt-28">
      <div className=" p-20 uppercase  text-slate-600 font-bold shadow">
        not-found post.{' '}
        <Link className="space-x-4 text-blue-500 font-bold" href={'/posts'}>
          Go Back
        </Link>
      </div>
    </div>
  );
}
