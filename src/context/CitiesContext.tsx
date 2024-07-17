import { createContext, useEffect, useState } from "react";
import { CitiesProviderContext, TCitiesContext } from "../lib/types";

export const MyContext = createContext<TCitiesContext | null>(null);

export default function CitiesContext({ children }: CitiesProviderContext) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <MyContext.Provider value={{ cities, isLoading }}>
      {children}
    </MyContext.Provider>
  );
}
