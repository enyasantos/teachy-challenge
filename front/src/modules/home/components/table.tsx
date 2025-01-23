"use client";
import useLoadPeople from "../hooks/useLoadPeople";
import Loader from "./loader";
import Pagination from "./pagination";
import TableHeader from "./table-header";
import TableRow from "./table-row";

export default function Table() {
  const { people, nextPageUrl, ref, loading } = useLoadPeople();

  return (
    <>
      <table className="w-full text-sm text-left">
        <thead className="bg-blue-50">
          <TableHeader />
        </thead>
        <tbody>
          {people?.map((person) => (
            <TableRow
              key={person.name}
              name={person.name}
              height={person.height}
              starshipsCount={person.starshipsCount}
              films={person.filmsNames}
            />
          ))}
        </tbody>
      </table>
      {loading && <Loader />}
      <Pagination nextPageUrl={nextPageUrl} ref={ref} />
    </>
  );
}
