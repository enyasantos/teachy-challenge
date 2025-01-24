"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  getStarWarsPeopleFormatted,
  PeopleFormated,
} from "../domain/swapi.action";
import { useInView } from "react-intersection-observer";
import { debounce } from "lodash";

const useLoadPeople = () => {
  const [people, setPeople] = useState<PeopleFormated[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(
    `${process.env.SWAPI_URL}/people/`
  );
  const [loading, setLoading] = useState(false);
  const isFetchingRef = useRef(false);
  const { ref, inView } = useInView();

  const fetchPeople = useCallback(async () => {
    if (isFetchingRef.current || !nextPageUrl) return;
    isFetchingRef.current = true;

    try {
      setLoading(true);
      if (nextPageUrl) {
        const response = await getStarWarsPeopleFormatted(nextPageUrl);
        setNextPageUrl(response.next);
        setPeople((people) => [...people, ...response.results]);
      }
    } catch (error) {
      console.error("Error fetching star wars people:", error);
    } finally {
      setLoading(false);
      isFetchingRef.current = false;
    }
  }, [nextPageUrl]);

  const fetchPeopleDebounced = useCallback(() => {
    debounce(async () => {
      await fetchPeople();
    }, 500)();
  }, [fetchPeople]);

  useEffect(() => {
    if (inView && nextPageUrl) {
      fetchPeopleDebounced();
    }
  }, [inView, nextPageUrl, fetchPeopleDebounced]);

  return {
    people,
    loading,
    nextPageUrl,
    ref,
    inView,
  };
};

export default useLoadPeople;
