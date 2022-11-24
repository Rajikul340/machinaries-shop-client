import React from 'react';
import {createContext, useState} from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/Firebase.config'
import {useEffect} from 'react';


export const UserContext =createContext();
const auth=getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    const[loader,setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const emailLogin =(email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email, password)

    }
    const googleLogin =() =>{
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }
    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        // setLoader(true)
        localStorage.removeItem('token');
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoader(false)
        
        });
        return ()=>{
           return unSubscribe();
        }

    },[])
    
    const handleUpdate = (profile)=>{
        return updateProfile (auth.currentUser, profile)
    }


const authInfo = {user,loader, emailLogin,createUser,googleLogin,logOut,handleUpdate}

    return (
      <UserContext.Provider value={authInfo}>
        {children}
      </UserContext.Provider>
    );
};

export default AuthProvider;