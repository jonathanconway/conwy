import { IconTypes } from "../icon";
import { Link } from "../link";
import { Text, TextSizes } from "../text";

export function createChainPropsMock() {
  return {
    children: [
      <Text>One</Text>,
      <Text>Two</Text>,
      <Link
        icon={IconTypes.Copy}
        href="https://linkedin.com"
        size={TextSizes.sm}
      >
        Three
      </Link>,
    ],
  };
}
