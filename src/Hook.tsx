import { useContext } from 'react';
import { Context } from './Context';

const useCustomContext = () => {
    return useContext(Context);
}

export default useCustomContext;