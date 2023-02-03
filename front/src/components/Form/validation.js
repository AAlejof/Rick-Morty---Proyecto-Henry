const validation = (userData) => {
    const regexUsername = '/^[^\s@]+@[^\s@]+\.[^\s@]+$';
    const regexPassword = '^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$';

    let errors = {}
    if(!userData.username){
        errors.username = "Enter username... "
    }
    else if(!regexUsername.test(userData.username)){
        errors.username = "Username must be an E-mail..."
    }
    else if(userData.username.length > 35){
        errors.username = "Username should not have more than 35 characters..."
    }
    else if(!userData.password){
        errors.password = "Enter password..."
    }
    else if(userData.password.match(regexPassword)){
        errors.password = "Password must have at least 1 number..."
    }
    else if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "Password must have between 6 and 10 characters"
    }

    return errors


}

export default validation;