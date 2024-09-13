import { Link } from "../../link";

type MdxAProps = Parameters<typeof Link>[0];

export function MdxA(props: MdxAProps) {
  return <Link {...props} />;
}
