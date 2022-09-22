import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    const handler = useEffect(() => {
        setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(handler); //cleanup ffc: when dependencies changed or unmount
    }, [value]); // dependencies

    return debounceValue;
}

export default useDebounce;
