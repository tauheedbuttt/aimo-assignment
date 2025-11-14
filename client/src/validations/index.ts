import * as yup from "yup";

export const filterValidationSchema = yup.object().shape({
  country: yup.string().optional(),
  users: yup
    .number()
    .min(0, "Users must be a non-negative number")
    .max(5000, "Users must be at most 5000")
    .optional(),
});
