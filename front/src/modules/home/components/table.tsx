"use client";
import useLoadPeople from "../hooks/useLoadPeople";
import TableHeaderComponent from "./table-header";
import TableRowComponent from "./table-row";

export default function TableComponent() {
  const { people, nextPageUrl, ref } = useLoadPeople();

  return (
    <>
      <table className="w-full text-sm text-left">
        <thead className="bg-blue-50">
          <TableHeaderComponent />
        </thead>
        <tbody>
          {people?.map((person) => (
            <TableRowComponent
              key={person.name}
              name={person.name}
              height={person.height}
              starshipsCount={person.starshipsCount}
              films={person.filmsNames}
            />
          ))}
        </tbody>
      </table>
      {!nextPageUrl && (
        <div className="text-center uppercase text-sm">
          No more people found
        </div>
      )}

      <div ref={ref} />
    </>
  );
}
