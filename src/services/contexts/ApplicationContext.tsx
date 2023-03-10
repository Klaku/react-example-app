import React, { useState } from 'react';
import { ApplicationContextDefaultValue } from 'utils/defaults/ApplicationContext';
export interface IApplicationContext {
  name: string;
}
const ApplicationContext = React.createContext<IApplicationContext>(ApplicationContextDefaultValue);

export const useApplicationContext = () => React.useContext(ApplicationContext);

export const ApplicationContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [name, setName] = useState('');

  return <ApplicationContext.Provider value={{ name }}>{children}</ApplicationContext.Provider>;
};
