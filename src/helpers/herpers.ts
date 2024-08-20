import { IErrors, IUserData } from "@/interface/interface";

const validate = (values: IUserData, fieldsToValidate: string[]): IErrors => {
  const errors: IErrors = {};
  if (fieldsToValidate.includes("user_name") && !values.user_name) {
    errors.user_name = "*";
  }

  if (
    fieldsToValidate.includes("user_email") &&
    (!values.user_email || !/\S+@\S+\.\S+/.test(values.user_email))
  ) {
    errors.user_email = "* Incorrect email format. Example: 4oLZ9@example.com";
  }

  if (fieldsToValidate.includes("message") && !values.message) {
    errors.message = "*";
  }
  return errors;
};

export default validate;
