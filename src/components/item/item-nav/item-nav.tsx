import { startCase } from "lodash";

import { ItemMeta } from "@/framework/client";

import { Link } from "../../link";
import { ItemMainImage } from "../item-main-image";

import * as styles from "./item-nav.styles";
import { useItemNav } from "./use-item-nav.hook";

interface ItemNavProps<TMeta extends ItemMeta> {
  readonly itemMetas: readonly TMeta[];
  readonly itemMeta: TMeta;
  readonly titleKey: keyof TMeta;
}

export function ItemNav<TMeta extends ItemMeta>(props: ItemNavProps<TMeta>) {
  const { itemMetasNavsPreviousNext } = useItemNav(props);
  return (
    <div className={styles.navsContainer}>
      {itemMetasNavsPreviousNext.map(({ type, itemMeta }) =>
        itemMeta ? (
          <Link key={type} className={styles.navContainer} href={itemMeta.slug}>
            <div className={styles.mainColumn}>
              <div className={styles.label}>
                {type === "previous" && "< "}
                {startCase(type)}
                {type === "next" && " >"}
              </div>
              <div className={styles.title}>
                {String(itemMeta[props.titleKey])}
              </div>
            </div>
            <div className={styles.asideColumn}>
              <ItemMainImage itemMeta={itemMeta} titleKey={props.titleKey} />
            </div>
          </Link>
        ) : (
          <div key={type} className={styles.containerEmpty}></div>
        ),
      )}
    </div>
  );
}
