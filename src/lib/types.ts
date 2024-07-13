export type Cities = {
  cityName: "string";
  country: "string";
  emoji: "string";
  date: "string";
  note: "string";
  id: number;
  city: string;
};

export type CitiesProps = {
  cities: Cities[];
  isLoading?: boolean;
};

export type MessageProps = {
  message: string;
};
