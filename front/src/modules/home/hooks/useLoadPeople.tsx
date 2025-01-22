"use client";
import { useEffect, useState } from "react";
import { getStarWarsPeople, StarWarsPeople } from "../domain/swapi.action";

const useLoadPeople = () => {
  const [people, setPeople] = useState<StarWarsPeople[]>([]);
  const [nextPage, setNextPage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        setLoading(true);
        const response = await getStarWarsPeople();
        setNextPage(response.next);
        setPeople(response.results);
      } finally {
        setLoading(false);
      }
    };
    fetchPeople();
  }, []);

  return {
    people,
    loading,
    nextPage,
  };
};

export default useLoadPeople;
