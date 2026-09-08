 const useEmailValidation = (mail) =>{
let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if (regex.test(mail)) {
   alert("Valid Email address");
   return false;
} else {
    alert("Invalid Email address");
    return true;    
}


}


export default useEmailValidation;