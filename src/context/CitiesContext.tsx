import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { TChildrenProps, TCities, TCitiesContext } from "../lib/types";

const MyContext = createContext<TCitiesContext | null>(null);

type Actions = {
  type:
    | "cities/loaded"
    | "city/deleted"
    | "city/created"
    | "loading"
    | "rejected";

  payload: any;
};

type StateProps = {
  isisLoading: boolean;
  cities: TCities[];
  currentCity: TCitiesContext;
  error: string;
};

function reducer(state: StateProps, action: Actions) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Unknown action");
  }
}

const initial = {
  cities: [],
  isisLoading: false,
  currentCity: {},
  error: "",
};

function CitiesContext({ children }: TChildrenProps) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initial
  );

  useEffect(() => {
    async function fetchCities() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch("http://localhost:8000/cities");
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading data...",
        });
      }
    }
    fetchCities();
  }, []);

  const getCity = useCallback(
    async function getCity(id: number) {
      if (Number(id) === currentCity.id) return;

      dispatch({ type: "loading" });
      try {
        const res = await fetch(`http://localhost:8000/cities/${id}`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        dispatch({
          type: "error",
          payload: "There was an error loading city...",
        });
      }
    },
    [currentCity.id]
  );

  async function createCity(newCity: string) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`http://localhost:8000/cities/`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "city/created", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading data...",
      });
    }
  }

  async function deleteCity(id: number) {
    dispatch({ type: "loading" });
    try {
      await fetch(`http://localhost:8000/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "city/deleted", payload: id });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading data...",
      });
    }
  }

  return (
    <MyContext.Provider
      value={{
        cities,
        isLoading,
        getCity,
        currentCity,
        createCity,
        deleteCity,
        error,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

function useCities(): TCitiesContext | null {
  const context = useContext(MyContext);
  if (context === undefined)
    throw new Error("Cities was used outside cities provider");
  return context;
}

export { useCities, CitiesContext };
