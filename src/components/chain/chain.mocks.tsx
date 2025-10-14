import { IconTypes } from "../icon";
import { Link } from "../link";
import { Text, TextSizes } from "../text";

export function createChainPropsMock() {
  return {
    children: [
      <Text key="Text-1">One</Text>,
      <Text key="Text-2">Two</Text>,
      <Link
        key="Link-1"
        icon={IconTypes.Copy}
        href="https://linkedin.com"
        size={TextSizes.sm}
      >
        Three
      </Link>,
    ],
  };
}
