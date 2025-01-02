import { ReactNode } from "react";

import { cn } from "@/framework/client";

import { CarouselItem } from "../carousel-item";
import { UseCarouselResult } from "../use-carousel.hook";

import * as styles from "./carousel-body.css";

interface CarouselBodyProps<T extends CarouselItem = CarouselItem> {
  readonly carousel: UseCarouselResult<T>;
  readonly renderBody: ({ item }: { readonly item: T }) => ReactNode;
}

export function CarouselBody<T extends CarouselItem = CarouselItem>(
  props: CarouselBodyProps<T>,
) {
  if (props.carousel.items.length === 0) {
    return null;
  }

  if (props.carousel.items.length === 1) {
    return props.renderBody({ item: props.carousel.items[0] });
  }

  return (
    <div className={styles.items}>
      {props.carousel.items.map((item, index) => (
        <div
          key={index}
          className={cn(
            styles.item,
            props.carousel.selectedItem === item
              ? styles.itemSelected
              : styles.itemUnselected,
          )}
        >
          {props.renderBody({ item })}
        </div>
      ))}
    </div>
  );
}
