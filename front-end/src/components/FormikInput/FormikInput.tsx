import { Field, ErrorMessage } from "formik";
import Input, { Props } from "../Input/Input";

const FormikInput = (props: Props) => {
  return (
    <div>
      <Field {...props} as={Input} />
      <div>
        <ErrorMessage component="div" {...props} />
      </div>
    </div>
  );
};

export default FormikInput;
