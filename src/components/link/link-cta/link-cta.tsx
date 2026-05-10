import { Image } from "../../image";
import { LinkBox, LinkBoxDescription, LinkBoxTitle } from "../../link-box";
import { StackDistributions } from "../../stack";
import { Stack, StackDirections } from "../../stack";

import { LinkCtaProps } from "./link-cta-props";

export function LinkCta(props: LinkCtaProps) {
  return (
    <LinkBox href={props.href} width="500px">
      <Stack
        direction={StackDirections.Row}
        distribution={StackDistributions.Flow}
        gap={1}
      >
        <Stack direction={StackDirections.Column} gap={0.5}>
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
