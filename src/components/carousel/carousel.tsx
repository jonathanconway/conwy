"use client";

import { ReactNode } from "react";

import { cn } from "@/framework/client";

import { TooltipProps } from "../tooltip";

import { CarouselNav } from "./carousel-nav";
import * as styles from "./carousel.css";
import { useCarousel } from "./use-carousel.hook";

export interface CarouselProps {
  readonly items: readonly {
    readonly children: ReactNode;
    readonly tooltip?: TooltipProps;
  }[];
}

export function Carousel(props: CarouselProps) {
  const carousel = useCarousel({
    items: props.items,
  });

  const { selectedItem } = carousel;

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {props.items.map((item, index) => (
          <div
            key={index}
            className={cn(
              styles.item,
              selectedItem === item
                ? styles.itemSelected
                : styles.itemUnselected,
            )}
          >
            {item.children}
          </div>
        ))}
      </div>

      {props.items.length > 1 && <CarouselNav carousel={carousel} />}
    </div>
  );
}
