import { Children, createContext, ReactNode, useContext, useState } from "react";
import { supabase } from "../lib/supabase/client";

interface User {
    id: string;
    name: string;
    email: string;
    username: string;
    pofileImg?: string;
    isOnBoardingDone?: boolean;
}
interface AuthContextType {
    user: User | null;
    signUp: (email: string, password: string) => Promise<void>;
}
const authContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(null);
    const signIn = async (email: string, password: string) => { };
    const signUp = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        if (data.user) {
            console.log(user);
        }
    };
    return (
        <authContext.Provider value={{ user, signUp }}>
            {children}
        </authContext.Provider>
    );
};


export const useAuth = () =>{
    const context = useContext(authContext);
    if(context === undefined){
        throw new Error("must be inside the provider");

    }
    return context;
}