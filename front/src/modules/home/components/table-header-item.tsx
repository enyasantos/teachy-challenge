interface Props {
  content: string;
}
export default function TambleHeaderItemComponent({ content }: Props) {
  return <th className="font-normal py-2 px-3">{content}</th>;
}
