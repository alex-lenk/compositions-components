import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const counters = [
        {
            id: 0,
            value: 0,
        },
        {
            id: 1,
            value: 1,
        },
        {
            id: 2,
            value: 2,
        },
    ]

    return <>
        {counters.map((count, num) =>
            <Counter key={num} value={count.value} />
        )}
        </>
}

export default CountersList
