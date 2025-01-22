"use client";
import useLoadPeople from "../hooks/useLoadPeople";
import TambleHeaderComponent from "./table-header";
import TambleRowComponent from "./table-row";

export default function TambleComponent() {
  const { loading, people, nextPage } = useLoadPeople();

  console.log(people);
  return (
    <table className="w-full text-sm text-left">
      <thead className="bg-blue-50">
        <TambleHeaderComponent />
      </thead>
      <tbody>
        <TambleRowComponent />
        <TambleRowComponent />
        <TambleRowComponent />
      </tbody>
    </table>
  );
}
