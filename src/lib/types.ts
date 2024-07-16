export type Cities = {
  cityName: "string";
  country: "string";
  emoji: "string";
  date: "string";
  notes: "string";
  id: number;
  city: string;
  countryName: string;
  position: {
    lat: number;
    lng: number;
  };
};

export type CitiesProps = {
  cities: Cities[];
  isLoading?: boolean;
};

export type MessageProps = {
  message: string;
};
