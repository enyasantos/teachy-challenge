"use server";

import { Film, StarWarsPeople, SwapiStarWarsPeopleResponse } from "./types";

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
    response?.results?.map(async (person) => {
      const filmsNames = [];
      for (const film of person?.films) {
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
