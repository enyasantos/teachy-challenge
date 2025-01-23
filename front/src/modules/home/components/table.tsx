"use client";
import useLoadPeople from "../hooks/useLoadPeople";
import TambleHeaderComponent from "./table-header";
import TambleRowComponent from "./table-row";

export default function TambleComponent() {
  const { people, nextPageUrl, ref, inView } = useLoadPeople();

  return (
    <>
      <table className="w-full text-sm text-left">
        <thead className="bg-blue-50">
          <TambleHeaderComponent />
        </thead>
        <tbody>
          {people?.map((person) => (
            <TambleRowComponent
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

      <div ref={ref}>{`Header inside viewport ${inView}.`}</div>
    </>
  );
}
