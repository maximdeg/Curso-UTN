import { useState } from "react";

function Counter({ limit }) {
    const [counter, setCounter] = useState(0);

    const handleClickAddButton = () => {
        setCounter(counter + 1);
    };

    const handleClickDecrementButton = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        } else {
            setCounter(0);
        }
    };
    return (
        <div>
            <button onClick={handleClickAddButton} hidden={counter === limit}>
                +
            </button>
            <span>{counter}</span>
            <button
                onClick={handleClickDecrementButton}
                disabled={counter === 0}
            >
                -
            </button>
            <span hidden={counter < limit}>
                No se puede incrementar mas de {limit}
            </span>
        </div>
    );

    // return (
    //   <>
    //     <ColorCardList colorCards={colorCards} />
    //     <button onClick={handleClickDecrementButton}>-</button>
    //     <span>{counter}</span>
    //     {counter < 10 ? (
    //       <button onClick={handleClickAddButton}>+</button>
    //     ) : (
    //       <span>No se puede incrementar mas de 10</span>
    //     )}
    //   </>
    // );
}

export default Counter;
