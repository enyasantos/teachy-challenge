import { heightTransform } from "../utils/height-transform";
import TambleRowItemComponent from "./table-row-item";

interface Props {
  name: string;
  height: string;
  starshipsCount: number;
  films: string[];
}

export default function TambleRowComponent({
  name,
  height,
  starshipsCount,
  films,
}: Props) {
  return (
    <tr className="border-b border-x">
      <TambleRowItemComponent content={name} />
      <TambleRowItemComponent content={heightTransform(height)} />
      <TambleRowItemComponent content={starshipsCount.toString()} />
      <TambleRowItemComponent content={films.join(", ")} />
    </tr>
  );
}
