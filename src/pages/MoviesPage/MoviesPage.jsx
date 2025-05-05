import { Formik, Field, Form } from 'formik';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function MoviesPage() {
  return (
    <>
      <h1>Search for a Movie</h1>
      <Formik
        initialValues={{ movie: '' }}
        onSubmit={(values) => {
          console.log('Movie submitted:', values.movie);
        }}
      >
        {() => (
          <Form>
            <label htmlFor="movie">Input your movie:</label>
            <Field
              as="textarea"
              id="movie"
              name="movie"
              placeholder="Input your movie"
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
