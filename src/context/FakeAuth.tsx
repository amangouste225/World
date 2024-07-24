import { createContext, useContext, useReducer } from "react";
import { TChildrenProps } from "../lib/types";

const AuthContext = createContext<StateProps | null>(null);

const initialState = {
  user: null,
  initialState: false,
};

type ActionsType = {
  type: "login" | "logout";
  payload: UserProps;
};

type StateProps = {
  user: UserProps;
  login: (email: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

type UserProps = {
  name: string;
  email: string;
  password: string;
  avatar: string;
};

const reducer = (state: StateProps, action: ActionsType) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };

    case "logout":
      return { ...state, user: null, isAuthenticated: false };

    default:
      throw new Error("Thanks");
  }
};

const FAKE_USER = {
  name: "Ange",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }: TChildrenProps) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email: string, password: string) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { useAuth, AuthProvider };
