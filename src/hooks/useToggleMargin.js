import React from 'react';

const useToggleMargin = () => {
    const [status , setStatus] = useState(false);
    setStatus(!status);
    return status;
}

export default useToggleMargin;
