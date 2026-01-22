import { Responsive } from "@/components/responsive";
import { Breakpoints } from "@/components/styling";

import { IconTypes } from "../../icon";
import { IconButton } from "../../icon-button";
import { CarouselItem } from "../carousel-item";
import { UseCarouselResult } from "../use-carousel.hook";

import * as styles from "./carousel-nav.css";

interface CarouselNavProps<T extends CarouselItem = CarouselItem> {
  readonly carousel: UseCarouselResult<T>;
}

export function CarouselNav<T extends CarouselItem = CarouselItem>(
  props: CarouselNavProps<T>,
) {
  if (props.carousel.items.length <= 1) {
    return null;
  }

  return (
    <div className={styles.switchButtonsContainer}>
      <IconButton
        icon={IconTypes.ArrowChevronLeft}
        tooltip={
          props.carousel.canGoPrevious
            ? {
                key: "previous",
                contents: "Previous",
                responsiveVisibility: {
                  sm: false,
                },
              }
            : undefined
        }
        disabled={!props.carousel.canGoPrevious}
        onClick={props.carousel.handlePreviousClick}
      />

      <Responsive minWidth={Breakpoints.lg}>
        {props.carousel.items.map((carouselItem, carouselItemIndex) => (
          <IconButton
            key={`carousel-item-${carouselItemIndex}`}
            isSelected={carouselItem === props.carousel.selectedItem}
            tooltip={{
              key:
                carouselItem.tooltip?.key ??
                `carousel-item-tooltip-${carouselItemIndex}`,
              contents:
                carouselItem.tooltip?.contents ??
                `Item ${carouselItemIndex + 1}`,
              responsiveVisibility: {
                sm: false,
              },
              ...carouselItem.tooltip,
            }}
            onClick={props.carousel.handleTabClick(carouselItem)}
          />
        ))}
      </Responsive>

      <IconButton
        icon={IconTypes.ArrowChevronRight}
        tooltip={
          props.carousel.canGoNext
            ? {
                key: "next",
                contents: "Next",
                responsiveVisibility: {
                  sm: false,
                },
              }
            : undefined
        }
        disabled={!props.carousel.canGoNext}
        onClick={props.carousel.handleNextClick}
      />
    </div>
  );
}
