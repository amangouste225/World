import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext<UserProps | null>(null);

const initialState = {
  user: null,
  initialState: false,
};

type ActionsType = {
  type: "login" | "logout";
  payload: UserProps;
};

type StateProps = {
  initialState: boolean;
  user: UserProps[] | null;
  login: (email: string, password: string) => void;
};

type UserProps = {
  name: string;
  email: string;
  password: string;
  avatar: string;
};

type UserContext = {
  children: React.ReactNode;
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

function AuthProvider({ children }: UserContext) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
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
