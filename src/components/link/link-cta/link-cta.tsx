import { Icon, IconTypes } from "../../icon";
import { Image } from "../../image";
import { LinkBox, LinkBoxDescription, LinkBoxTitle } from "../../link-box";
import { StackDistributions } from "../../stack";
import { Stack, StackDirections } from "../../stack";

import { LinkCtaProps } from "./link-cta-props";

export function LinkCta(props: LinkCtaProps) {
  return (
    <LinkBox href={props.href} hasMaxWidth>
      <Stack
        direction={StackDirections.Row}
        distribution={StackDistributions.Flow}
        gap={1}
      >
        <Icon icon={IconTypes.PointRightFinger} size="2.5rem" />
        <Stack direction={StackDirections.Column} gap={0.125}>
          <LinkBoxTitle>{props.title}</LinkBoxTitle>
          <LinkBoxDescription>{props.description}</LinkBoxDescription>
        </Stack>
        <Image
          image={{
            src: props.imageSrc,
          }}
          width={100}
          height={66}
        />
      </Stack>
    </LinkBox>
  );
}
