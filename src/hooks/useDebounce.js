import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(handler); //cleanup ffc: when dependencies changed or unmount
        // eslint-disable-next-line
    }, [value]); // dependencies

    return debounceValue;
}

export default useDebounce;
