'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .required('Required'),

      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <section className="w-5/6 mx-auto">
        <div className="grid grid-cols-1 justify-items-center w-full">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col px-10 py-12 gap-4 shadow mt-28"
          >
            <label
              htmlFor="email"
              className=" w-full flex  justify-between font-semibold mr-2"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className=" border py-2  focus:ring-orange-400 focus:ring focus:outline-none"
              onBlur={formik.handleBlur}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <label
              htmlFor="password"
              className=" w-full flex justify-between font-semibold mr-2"
            >
              Password
            </label>
            <input
              onChange={formik.handleChange}
              name="password"
              className=" border py-2 focus:ring-orange-400 focus:ring focus:outline-none"
              onBlur={formik.handleBlur}
              value={formik.values.password}
              type="password"
              id="password"
            />
            {/* <div className="w-full px-6 py-2 bg-red-200 !text-white"> */}
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

            <button
              className={`py-2 px-4 rounded-md bg-[#fb923c] text-white w-min mt-4 `}
              type="submit"
              disabled={formik.isSubmitting}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
