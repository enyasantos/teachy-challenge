interface SwapiResponse {
  count: number;
  next: string;
  previous: string;
  results: StarWarsPeople[];
}

export interface StarWarsPeople {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

export async function getStarWarsPeople(): Promise<SwapiResponse> {
  const response = await fetch("https://swapi.dev/api" + "/people", {
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch Star Wars People");
  }

  const data: SwapiResponse = await response.json();
  return data;
}
