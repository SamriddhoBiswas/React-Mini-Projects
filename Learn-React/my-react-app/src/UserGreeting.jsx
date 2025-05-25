function UserGreeting(props)
{
    if(props.isLoggedIn)
        return <h2>Welcome {props.username}</h2>
    else
        return <h2>Please log in to continue</h2>
    
    //ternary
    //const welcomeMessage = <h2>Welcome {props.username}</h2>
    //const loginPrompt = <h2>Please log in to continue</h2>
    //return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}
export default UserGreeting