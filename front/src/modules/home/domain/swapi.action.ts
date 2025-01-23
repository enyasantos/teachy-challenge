export interface SwapiStarWarsPeopleResponse {
  count: number;
  next: string | null;
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

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface PeopleFormated extends StarWarsPeople {
  starshipsCount: number;
  filmsNames: string[];
}

interface PeopleFormatedResponse {
  results: PeopleFormated[];
  next: string | null;
}

async function getStarWarsPeople(
  url: string
): Promise<SwapiStarWarsPeopleResponse> {
  const response = await fetch(url, {
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch Star Wars people");
  }

  const data: SwapiStarWarsPeopleResponse = await response.json();
  return data;
}

export async function getStarWarsPeopleFormatted(
  url: string
): Promise<PeopleFormatedResponse> {
  const response = await getStarWarsPeople(url);

  const people: PeopleFormated[] = await Promise.all(
    response.results.map(async (person) => {
      const filmsNames = [];
      for (const film of person.films) {
        const response = await fetch(film, {
          cache: "force-cache",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch Star Wars film");
        }

        const data: Film = await response.json();
        filmsNames.push(data.title);
      }
      return Object.assign(person, {
        starshipsCount: person.starships.length,
        filmsNames,
      });
    })
  );

  return {
    next: response.next,
    results: people,
  };
}
