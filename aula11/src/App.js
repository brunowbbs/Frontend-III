import { Formik } from "formik";

function App() {
  return (
    <Formik
      //valores iniciais do form
      initialValues={{ email: "" }}
      //função de submissao do formulario
      onSubmit={(values) => alert(values.email)}
      //validar campos
      validate={(values) => {
        const errors = {};

        if (!values.email) {
          errors.email = "Colé, digite um email";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Email invalido";
        }

        return errors;
      }}
    >
      {({ handleSubmit, handleChange, errors }) => (
        <form onSubmit={handleSubmit}>
          <input name="email" placeholder="Email" onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}

          <button type="submit">Sumit</button>
        </form>
      )}
    </Formik>
  );
}

export default App;
