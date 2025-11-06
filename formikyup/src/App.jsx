// BasicForm.jsx
import React from "react";
import { Formik } from "formik"; // Formik helps handle forms easily

export default function BasicForm() {
  return (
    // Formik wrapper: it manages the form’s state, validation, and submission
    <Formik
      initialValues={{ email: "", password: "" }} // starting values for form
      onSubmit={(values) => {
        console.log("Form Data:", values); // when form is submitted, print data
      }}
    >
      {/* formik gives helper methods (formik.handleChange, formik.values etc.) */}
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit} // handleSubmit runs onSubmit above
          className="max-w-sm mx-auto mt-10 flex flex-col gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange} // updates formik.values.email
            value={formik.values.email} // shows the current email value
            className="p-2 border"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="p-2 border"
          />

          <button type="submit" className="bg-blue-600 text-white p-2 rounded">
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}
