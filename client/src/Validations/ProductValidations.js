import * as yup from "yup";

// Product Schema with  Validation Messages
export const productSchemaValidation = yup.object().shape({
  id: yup.number().required("ID must be number"),
  title: yup
    .string()
    .min(4)
    .max(20)
    .required("title must be a string and required"),
  price: yup.number().required("price must be a number"),
});
