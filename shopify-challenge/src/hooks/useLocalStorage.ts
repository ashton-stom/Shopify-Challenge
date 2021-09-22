import React, { useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
    const value = localStorage.getItem(key);
    const parsedValue = value ? JSON.parse(value) as T : initialValue
    const [state, setState] = useState(parsedValue);

    const setLocalStorageState = (value: T): void => {
        const stringValue = JSON.stringify(value)
        localStorage.setItem(key, stringValue);
        setState(value);
    };

    return [state, setLocalStorageState];
}