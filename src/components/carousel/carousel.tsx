"use client";

import { ReactNode } from "react";

import { CarouselBody } from "./carousel-body";
import { CarouselItem } from "./carousel-item";
import { CarouselNav } from "./carousel-nav";
import * as styles from "./carousel.css";
import { useCarousel } from "./use-carousel.hook";

export interface CarouselProps<T extends CarouselItem = CarouselItem> {
  readonly items: readonly T[];

  readonly renderBody: ({ item }: { readonly item: T }) => ReactNode;
}

export function Carousel<T extends CarouselItem = CarouselItem>(
  props: CarouselProps<T>,
) {
  const carousel = useCarousel<T>({
    items: props.items,
  });

  return (
    <div className={styles.container}>
      <CarouselBody carousel={carousel} renderBody={props.renderBody} />

      <CarouselNav carousel={carousel} />
    </div>
  );
}
