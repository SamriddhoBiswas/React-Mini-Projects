function Food(){
    
    const food1 = "Orange";
    const food2 = "Banana";

    return (
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
            <a href = "https://www.google.com/">Visit Google</a>
        </ul>
    );
}
export default Food