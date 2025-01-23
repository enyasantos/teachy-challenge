"use client";
import { useCallback, useEffect, useState } from "react";
import {
  getStarWarsPeopleFormatted,
  PeopleFormated,
} from "../domain/swapi.action";
import { useInView } from "react-intersection-observer";

const useLoadPeople = () => {
  const [people, setPeople] = useState<PeopleFormated[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(
    "https://swapi.dev/api/people/"
  );
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView();

  const fetchPeople = useCallback(async () => {
    try {
      setLoading(true);
      if (nextPageUrl) {
        const response = await getStarWarsPeopleFormatted(nextPageUrl);
        setNextPageUrl(response.next);
        setPeople((people) => [...people, ...response.results]);
      }
    } finally {
      setLoading(false);
    }
  }, [nextPageUrl]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (inView) {
        fetchPeople();
      }
    }
  }, [fetchPeople, inView]);

  return {
    people,
    loading,
    nextPageUrl,
    ref,
    inView,
  };
};

export default useLoadPeople;
