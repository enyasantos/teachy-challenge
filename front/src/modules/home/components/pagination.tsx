interface Props {
  nextPageUrl: string | null;
  ref: (node?: Element | null) => void;
}

export default function Pagination({ nextPageUrl, ref }: Props) {
  return (
    <>
      {!nextPageUrl && (
        <div className="text-center text-sm pt-4">No more people found</div>
      )}

      <div ref={ref} />
    </>
  );
}
