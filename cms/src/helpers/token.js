
// check token in local storage, if any exist then check token time expire
export const checkToken = () => {
	let now     = new Date(),
      token     = localStorage.getItem("token"),
      jsonToken = JSON.parse(token);
      now.setHours(now.getHours())

    if(token && jsonToken['status'] === true && new Date(jsonToken['expire']) > now){
      return true;
    }

    return;
}

// store token and expire time (1 hour after token stored) in local storage
export const setToken = (token) => {
	let nextHour = new Date();
    let date     = new Date();
    nextHour.setHours(date.getHours() + 1); //one hour from now
    token['expire'] = nextHour;
    // store user details and time expiration in local storage to keep user logged in between page refreshes
    localStorage.setItem('token', JSON.stringify(token));
}
