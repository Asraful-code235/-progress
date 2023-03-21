// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// const CustomError = ({ statusCode }) => {
//   return (
//     <div>
//       <h1>
//         {statusCode
//           ? `An error ${statusCode} occurred on server`
//           : 'An error occurred on client'}
//       </h1>
//       <p>Sorry, the page you are looking for could not be found.</p>
//       <Link href="/">
//         <a>Go back to the homepage</a>
//       </Link>
//     </div>
//   );
// };

// const LoginPage = () => {
//   return (
//     <div>
//       <h1>Login Page</h1>
//       {/* Login form here */}
//     </div>
//   );
// };

// const PageNotFound = () => {
//   return (
//     <div>
//       <h1>Page Not Found</h1>
//       <p>The page you are looking for does not exist.</p>
//       <Link href="/">
//         <a>Go back to the homepage</a>
//       </Link>
//     </div>
//   );
// };

// const DynamicPage = () => {
//   const router = useRouter();
//   const { slug } = router.query;
//   const firstSegment = slug && slug[0];

//   if (firstSegment === 'login') {
//     return <LoginPage />;
// //   } else {
//     return <PageNotFound />;
//   }
// };

// DynamicPage.getServerSideProps = ({ res, err }) => {
//   const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
//   return { statusCode };
// };

// export default CustomError;
