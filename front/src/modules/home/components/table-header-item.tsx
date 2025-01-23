interface Props {
  content: string;
}
export default function TableHeaderItemComponent({ content }: Props) {
  return <th className="font-normal py-2 px-3">{content}</th>;
}
