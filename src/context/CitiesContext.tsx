import { createContext, useContext, useEffect, useState } from "react";
import { CitiesProviderContext, TCitiesContext } from "../lib/types";

export const MyContext = createContext<TCitiesContext | null>(null);

function CitiesContext({ children }: CitiesProviderContext) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/cities");
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  async function getCity(id: number) {
    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:8000/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("There was an error loading data...");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <MyContext.Provider value={{ cities, isLoading, getCity, currentCity }}>
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
