
const checkValidData = (email,pass)=>{
  
    const isEmailVaild = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(pass);

    if(!isEmailVaild) return "Email Id is not valid";
    if(!isPasswordValid) return "password is not valid"; 
    
    return null;
}

export default checkValidData;