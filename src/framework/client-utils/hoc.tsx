import { get, omit } from "lodash";
import { ComponentType } from "react";

export function createWithHOC<THOCProps, THOCName extends string>(
  HOC: ComponentType<THOCProps>,
  hocName: THOCName,
) {
  return function withHOC<TLOCProps extends JSX.IntrinsicAttributes>(
    LOC: ComponentType<TLOCProps>,
  ) {
    return function ComponentWithLOC(
      props: TLOCProps & Partial<Record<THOCName, THOCProps>>,
    ) {
      const hocProps = props[hocName] as THOCProps;
      if (hocProps) {
        const hocPropsWithoutKey = omit(hocProps, "key") as THOCProps;
        const hocKey = String(get(hocProps, "key"));
        const locPropsWithoutHocProps = omit(props, hocName) as TLOCProps;
        return (
          <HOC {...hocPropsWithoutKey} key={hocKey}>
            <LOC {...locPropsWithoutHocProps} />
          </HOC>
        );
      } else {
        return <LOC {...props} />;
      }
    };
  };
}
