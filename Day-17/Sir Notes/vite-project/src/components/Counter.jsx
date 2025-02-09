export const Counter = () => {

    let count = 0;

    const handleIncrement = () => {
        count++
        console.log(count);
    }

    return(
        <>
        <button onClick={handleIncrement}>Count: {count}</button>
        </>
    )

}