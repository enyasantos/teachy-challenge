import Tamble from "../components/table";

export default function StartWarsPage() {
  return (
    <article className="p-2 lg:p-6 space-y-6">
      <h1 className="font-semibold text-xl">
        Personagens dos filmes de Star Wars
      </h1>
      <section className="relative overflow-x-auto rounded-lg">
        <Tamble />
      </section>
    </article>
  );
}
