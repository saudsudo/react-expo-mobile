import {
  
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
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
  signIn: (email: string, password: string) => Promise<void>;
  updateUser: (userData: Partial<User>) => Promise<void>;
}
const authContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(()=>{
    checkSession();
  },[]);
  const checkSession = async() =>{
    try{
 const {data: {session}} = await supabase.auth.getSession();
 if(session?.user){
       const profile = await fetchUserProfile(session.user.id);
       setUser(profile);
      }
      else{
        setUser(null);
      }
    }
    catch(e){
            console.error("Error checking session", e);
            setUser(null);
    }
  }

  const fetchUserProfile = async (userId: string): Promise<User | null> => {
    try {
   const {data , error} =    await supabase.from("profiles").select("*").eq("id", userId).single();
      if (error) {
        console.error("Error fetching profile", error);
        return null;
      }

      if (!data) {
        console.error("No Data returned form server");
        return null;
      }

      const authUser = await supabase.auth.getUser();
      if(!authUser.data.user){
        console.error("No auth user found");
        return null;
      }
      

      return {
        id: data.id,
        name: data.name,
        username: data.username,
        email: authUser.data.user.email || "",
     pofileImg: data.profile_img_url,
isOnBoardingDone: data.onBoardingCompleted,
      }
    } catch (e) {

        console.error("Error in fetchUserProfile", e);
        return null; 
    }
  };
  const signIn = async (email: string, password: string) => {

const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    if (data.user) {
        console.log(data.user);
       // debugger;
     const  profile =await  fetchUserProfile(data.user.id);
     console.log(profile);
    setUser(profile);
    }

  };
  const signUp = async (email: string, password: string) => {       
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    if (data.user) {
        console.log(data.user);
        debugger;
     const  profile =await  fetchUserProfile(data.user.id);
     console.log(profile);
    setUser(profile);
    }
  };

//   const updateUser = async (userData: Partial<User>) => {
//     if (!user) return;
//     try {
//       const updateData: any = {};
//       if (userData.name !== undefined) updateData.name = userData.name;
//       if (userData.username !== undefined)
//         updateData.username = userData.username;
//       if (userData.pofileImg !== undefined)
//         updateData.profile_image_url = userData.pofileImg;
//       if (userData.pofileImg !== undefined)
//         updateData.onboarding_completed = userData.isOnBoardingDone;

//       const { error, data } = await supabase
//         .from("profiles")
//         .update(updateData)
//         .eq("id", user.id)
//         .select()
//         .single();
//       if (error) throw error;
//     } catch (e) {}
//   };
const updateUser = async (userData: Partial<User>) => {
  if (!user) return;

  try {
    const updateData: any = {};

    if (userData.name !== undefined) {
      updateData.name = userData.name;
    }

    if (userData.username !== undefined) {
      updateData.username = userData.username;
    }

    if (userData.pofileImg !== undefined) {
      updateData.profile_img_url = userData.pofileImg;
    }

    if (userData.isOnBoardingDone !== undefined) {
      updateData.onBoardingCompleted = userData.isOnBoardingDone;
    }

    const { data, error } = await supabase
      .from("profiles")
      .update(updateData)
      .eq("id", user.id)
      .select()
      .single();

    if (error) {
      console.error("UPDATE USER ERROR:", error);
      throw error;
    }

    console.log("Profile updated:", data);

    setUser({
      ...user,
      ...userData,
    });
  } catch (e) {
    console.error("UPDATE USER ERROR:", e);
    throw e;
  }
};

  return (
    <authContext.Provider value={{ user, signUp, updateUser, signIn }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error("must be inside the provider");
  }
  return context;
};
