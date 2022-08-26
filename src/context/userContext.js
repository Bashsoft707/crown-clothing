import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const getUser = useCallback(async () => {
    const res = await axios.get("http://localhost:5000/api/v1/auth/me", {
      headers: {
        Authorization: `Bearer ${currentUser}`,
      },
    });
    setCurrentUser(res.data);
  }, [currentUser]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const value = {
    currentUser,
    setCurrentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
