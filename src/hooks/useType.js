import React from 'react';

const useType = () => {
    const [type, setType] = useState('text');
    setType('date');
    return type;
}

export default useType;
