import "./styles.css";
import { useFormik } from "formik";

//with formik you can easily do :

//state managment of data
//submit the data
//validate the data

export default function App() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.username) {
        errors.username = "username required";
      }
      if (!values.email) {
        errors.email = "email required";
      }
      if (!values.password) {
        errors.password = "password required";
      }
      return errors;
    }
  });
  return (
    <div className="App">
      <h1>Form using Formik</h1>

      <form onSubmit={formik.handleSubmit} autocomplete="off">
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username && <p>{formik.errors.username}</p>}
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && <p>{formik.errors.email}</p>}
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && <p>{formik.errors.password}</p>}
        <button type="submit">submit</button>
      </form>

      <p>{formik.values.username}</p>
    </div>
  );
}
