import { Configuration } from "@/types/Task";
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from "react";

interface ConfigurationContextType {
    configuration: Configuration;
    setConfiguration: Dispatch<SetStateAction<Configuration>>;
}

export const ConfigurationContext = createContext<ConfigurationContextType>({
    configuration: {
        category: "Epic",
        quantifier: "Story Points",
    },
    setConfiguration: () => {},
});

export function ConfigurationProvider({ children }: { children: ReactNode }) {
    const [configuration, setConfiguration] = useState({
        category: "Epic",
        quantifier: "Story Points",
    });

    return (
        <ConfigurationContext.Provider
            value={{ configuration, setConfiguration }}
        >
            {children}
        </ConfigurationContext.Provider>
    );
}
