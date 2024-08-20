interface IErrors {
  name?: string;
  user_name?: string;
  email?: string;
  user_email?: string;
  address?: string;
  message?: string;
  phone?: string;
  password?: string;
  repeat_password?: string;
}

interface IUserData {
  user_name: string;
  user_email: string;
  message: string;
}

export type { IErrors, IUserData };
