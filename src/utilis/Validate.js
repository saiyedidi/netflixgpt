 export const checkValidData = (email,password,name)=>{

    const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^[a-z ,.'-]+$/i.test(name);


    if(!isEmailvalid) return "Email Is Not Valid"
    if(!isPasswordValid) return "Password Is Not valid"
    if(!isNameValid) return "Name is not valid"

    return null;

}
