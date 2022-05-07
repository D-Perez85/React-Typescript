import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custon-form.json";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
    
    for (const input of formJson) {
        initialValues[input.name] = input.value;
        }

export const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ type, name, placeholder, label }) => {
              return (
                <MyTextInput
                  key={name}
                  name={name}
                  type={type as any}
                  label={label}
                  placeholder={placeholder}
                />
              );
            })}
            <button type="submit"> SUBMIT </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
