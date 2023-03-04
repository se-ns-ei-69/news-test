interface UserDTO {
  username: FormDataEntryValue | null,
  password: FormDataEntryValue | null
}

export const authService = (userDTO: UserDTO) => {
  if (userDTO.username === process.env.REACT_APP_USERNAME &&
    userDTO.password === process.env.REACT_APP_PASSWORD) {
    return {
      auth: true,
      error: true
    };
  } else {
    return {
      auth: false,
      error: true
    };
  }
};
