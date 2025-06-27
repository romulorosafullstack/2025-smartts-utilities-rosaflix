import { onAuthStateChanged, type User } from "firebase/auth";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { auth } from "../ConfigFirebase";


interface AuthContextType{
  user : User | null,
  setUser: React.Dispatch<React.SetStateAction<User | null> >,
  loading: boolean;
}

interface AuthProviderProps{
  children: ReactNode;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsubscribe;
  },[]);

  return(
    <AuthContext.Provider value= {{user, setUser, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if(!context){
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
