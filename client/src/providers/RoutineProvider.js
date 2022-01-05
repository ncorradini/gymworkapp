import { createContext, useState } from 'react';

export const RoutineContext = createContext();

const RoutineProvider = () => {
    const [plan, setPlan] = useState({});
    return <RoutineContext.Provider value={plan, setPlan}>{children}</RoutineContext.Provider>
} 

export default RoutineProvider;