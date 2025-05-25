function Button()
{
    let count = 0; 
    const handleClick = (name) => {
        if(count<3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} stop clicking me!`);
        }
    }
    //return(<button onClick={() => handleClick("Bro")}>Click Me</button>);

    const handleClick2 = (e) => e.target.textContent = 'OUCH';
    const handleClick3 = (e) => e.target.style.display = 'none';

    return(<button onClick={(e) => handleClick2(e)}>Click Me</button>);
    //return(<button onClick={(e) => handleClick3(e)}>Click Me</button>);
    //return(<button onDoubleClick={(e) => handleClick2(e)}>Click Me</button>);
}
export default Button