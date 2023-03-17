import { createContext, useContext, useState, useEffect } from "react"

type userContextProviderProps = {
    children: React.ReactNode;
}

export const UserContext = createContext<{ data: any }>({} as any);

export const UserContextProvider = ({ children }: userContextProviderProps) => {
    const [data, setData] = useState({});
    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch("http://my-api.com/users");
    //         const json = await response.json();
    //         setData(json);
    //     }
    //     fetchData();
    // }, []);
    const name = 'oslim'
    return (

        <UserContext.Provider value={{ data }}>
            {children}
        </UserContext.Provider>
    );
};

export const GlobalUserContext = () => {
    return useContext(UserContext);
};
