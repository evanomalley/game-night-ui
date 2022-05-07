export type registerValues = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
}

//validation for the registration form
export default function validateRegisterInfo(values: Partial<registerValues>){
    let errors = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isValid: true
    };

    //name
    if(values.name === undefined || !values.name.trim()){
        errors.name = "Name required";
        errors.isValid = false;
    }
    //email
    if (!values.email) {
        errors.email = 'Email required';
        errors.isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
        errors.isValid = false;
    }
    //password
    if (!values.password) {
        errors.password = 'Password is required';
        errors.isValid = false;
    } else if (values.password.length < 6) { //stronger password
        errors.password = 'Password needs to be 6 characters or more';
        errors.isValid = false;
    }
    //confirm password
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Password is required';
        errors.isValid = false;
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords do not match';
        errors.isValid = false;
    }

    return errors;
}