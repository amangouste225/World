export type TCities = {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  id: number;
  city: string;
  countryName: string;
  position: {
    lat: number;
    lng: number;
  };
};

export type TCitiesContext = {
  cities: TCities[];
  isLoading?: boolean;
  getCity: (id: string) => void;
  currentCity: {
    cityName: string;
    country: string;
    emoji: string;
    notes: string;
    date: string;
    id: number;
  };
};

export type MessageProps = {
  message: string;
};

export type CitiesProviderContext = {
  children: React.ReactNode;
};
