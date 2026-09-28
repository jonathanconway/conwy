import { Content } from "../content";
import { ContentMap } from "../content-map";
import { ContentType } from "../content-type";

export type ContentLinkGetterMap<TGetterReturn> = {
  [key in Content["type"]]: ContentLinkGetter<
    Content & { readonly type: key },
    TGetterReturn
  >;
};

export type ContentLinkGetter<
  TContentItem extends Content & { readonly type: ContentType },
  TGetterReturn,
> = (contentMap: ContentMap, content: TContentItem) => TGetterReturn;
