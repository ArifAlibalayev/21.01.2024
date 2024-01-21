import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import { Helmet } from "react-helmet-async";

function Addpage() {
  const [apiData, setApiData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetch("http://localhost:3100/");
    const data = await res.json();
    setApiData(data);
  }

  async function postItem(item) {
    await fetch(`http://localhost:3100/`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(item),
    });
    await getData();
  }

  async function deleteItem(id) {
    await fetch(`http://localhost:3100/${id}`, {
      method: "DELETE",
      body: JSON.stringify(),
    });
    await getData();
  }

  return (
    <section id="Addpage">
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <h1>Add Page</h1>
      <Formik
        initialValues={{ name: "", desc: "", img: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(25, "Must be 15 characters or less")
            .required("Required"),
          desc: Yup.string().required("Required"),
          img: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            postItem(values);
            resetForm();
          }, 400);
        }}
      >
        <Form className="formCSS">
          <label htmlFor="name">Title</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="desc">Description</label>
          <Field name="desc" type="text" />
          <ErrorMessage name="desc" />

          <label htmlFor="img">Image link</label>
          <Field name="img" type="text" />
          <ErrorMessage name="img" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <div className="sortSearch">
        <div className="sortSearchTitle">
          <h2>Sort & Search</h2>
        </div>
        <div className="sortSearchButtons">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => setCategory({ property: "name", asc: true })}>
            A-z
          </button>
          <button onClick={() => setCategory({ property: "name", asc: false })}>
            Z-a
          </button>
          <button onClick={() => setCategory(null)}>Default</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {apiData
            .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => {
              if (category && category.asc === true) {
                return a[category.property] > b[category.property]
                  ? 1
                  : a[category.property] < b[category.property]
                  ? -1
                  : 0;
              } else if (category && category.asc === false) {
                return a[category.property] < b[category.property]
                  ? 1
                  : a[category.property] > b[category.property]
                  ? -1
                  : 0;
              } else {
                return null;
              }
            })
            .map((x) => (
              <tr key={x._id}>
                <td>{x.name}</td>
                <td>{x.desc}</td>
                <td>
                  <button onClick={() => deleteItem(x._id)}>delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}

export default Addpage;
