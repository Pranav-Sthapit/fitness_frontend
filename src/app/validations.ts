export const validateUsername=(username:string)=>{
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,20}$/;

    if (!username) {
      return 'Username Required';
    } else if (!usernameRegex.test(username)) {
      return 'username must begin with letter and have between 3 - 20 characters';
    } else {
      return '';
    }

}


export const validatePassword=(password:string)=>{
    const passwordRegex = /^.{8,15}$/;
    if (!password) {
      return 'Password required';
    } else if (!passwordRegex.test(password)) {
      return 'Password must be between 8 - 15 characters';
    } else {
      return '';
    }

}


export const validateName=(name:string,type:string)=>{
  const nameRegex = /^[a-zA-Z][a-zA-Z]+$/;

    if (!name) {
      return type+'name Required';
    } else if (!nameRegex.test(name)) {
      return type+'name must be alphabets only';
    } else {
      return '';
    }
}

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    return 'Email Required';
  } else if (!emailRegex.test(email)) {
    return 'Invalid email format';
  } else {
    return '';
  }
};