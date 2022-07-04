import React, {useEffect, useState} from "react";

interface E{
    value: any
}

export default function useLocalState(defaultValue: string, key: string){
    const [value, setValue] = useState(() => {
        const value = localStorage.getItem(key);
        if (value !== null){
            return JSON.parse(value)
        }else{
            return defaultValue
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue]

}