import { isObject } from "lodash";

import { IconTypes } from "../../icon";
import { IconButton } from "../../icon-button";
import { UseCarouselResult } from "../use-carousel.hook";

import * as styles from "./carousel-nav.styles";

interface CarouselNavProps<T> {
  readonly carousel: UseCarouselResult<T>;
  readonly tabTooltipDescription?: string;
}

export function CarouselNav<T>(props: CarouselNavProps<T>) {
  if (props.carousel.items.length <= 1) {
    return null;
  }

  return (
    <div className={styles.switchButtonsContainer}>
      <IconButton
        icon={IconTypes.ArrowChevronLeft}
        tooltip={{ key: "previous", contents: "Previous" }}
        disabled={!props.carousel.canGoPrevious}
        onClick={props.carousel.handlePreviousClick}
      />

      {props.carousel.items.map((tabItem, tabItemIndex) => (
        <IconButton
          //  todo: try to find a faster way
          key={JSON.stringify(tabItem)}
          isSelected={tabItem === props.carousel.selectedItem}
          tooltip={{
            key: `tab-${tabItemIndex}`,
            contents:
              isObject(tabItem) && "title" in tabItem
                ? String(tabItem.title)
                : `${props.tabTooltipDescription ?? "Item"} #${tabItemIndex + 1}`,
          }}
          onClick={props.carousel.handleTabClick(tabItem)}
        />
      ))}

      <IconButton
        icon={IconTypes.ArrowChevronRight}
        tooltip={{ key: "next", contents: "Next" }}
        disabled={!props.carousel.canGoNext}
        onClick={props.carousel.handleNextClick}
      />
    </div>
  );
}
