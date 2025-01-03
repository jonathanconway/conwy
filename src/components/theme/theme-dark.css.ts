import { createTheme } from "@vanilla-extract/css";

import { aboutMeThemeDark } from "../about-me/about-me.css-theme";
import { articleSummaryThemeDark } from "../article/article-summary/article-summary.css-theme";
import { articlesTagFiltersThemeDark } from "../articles/articles-tag-filters/articles-tag-filters.css-theme";
import { asideThemeDark } from "../aside/aside.css-theme";
import { blockQuoteThemeDark } from "../block-quote/block-quote.css-theme";
import { boxThemeDark } from "../box/box.css-theme";
import { buttonThemeDark } from "../button/button.css-theme";
import { codeThemeDark } from "../code/code.css-theme";
import { contentListItemThemeDark } from "../content-list/content-list-item/content-list-item.css-theme";
import { footerThemeDark } from "../footer/footer.css-theme";
import { headerHamburgerThemeDark } from "../header/header-hamburger/header-hamburger.css-theme";
import { headerLogoThemeDark } from "../header/header-logo/header-logo.css-theme";
import { headerNavThemeDark } from "../header/header-nav/header-nav.css-theme";
import { iconThemeDark } from "../icon/icon.css-theme";
import { imageFigureThemeDark } from "../image-figure/image-figure.css-theme";
import { imageModalThemeDark } from "../image-modal/image-modal.css-theme";
import { itemNavThemeDark } from "../item/item-nav/item-nav.css-theme";
import { labelThemeDark } from "../label/label.css-theme";
import { layoutThemeDark } from "../layouts/app-layout/app-layout.css-theme";
import { linkBoxTitleThemeDark } from "../link-box/link-box-title/link-box-title.css-theme";
import { linkBoxThemeDark } from "../link-box/link-box.css-theme";
import { linkThemeDark } from "../link/link.css-theme";
import { microsListItemThemeDark } from "../micros/micros-list/micros-list-item/micros-list-item.css-theme";
import { switchThemeDark } from "../switch/switch.css-theme";
import { textThemeDark } from "../text/text.css-theme";
import { tooltipThemeDark } from "../tooltip/tooltip.css-theme";

import { vars } from "./theme-contract.css";

export const themeDarkClass = createTheme(vars, {
  aboutMe: aboutMeThemeDark,
  articlesTagFilters: articlesTagFiltersThemeDark,
  articleSummary: articleSummaryThemeDark,
  aside: asideThemeDark,
  blockQuote: blockQuoteThemeDark,
  box: boxThemeDark,
  button: buttonThemeDark,
  code: codeThemeDark,
  contentListItem: contentListItemThemeDark,
  footer: footerThemeDark,
  headerHamburger: headerHamburgerThemeDark,
  headerLogo: headerLogoThemeDark,
  headerNav: headerNavThemeDark,
  icon: iconThemeDark,
  imageFigure: imageFigureThemeDark,
  imageModal: imageModalThemeDark,
  itemNav: itemNavThemeDark,
  label: labelThemeDark,
  layout: layoutThemeDark,
  link: linkThemeDark,
  linkBox: linkBoxThemeDark,
  linkBoxTitle: linkBoxTitleThemeDark,
  microsListItem: microsListItemThemeDark,
  switch: switchThemeDark,
  text: textThemeDark,
  tooltip: tooltipThemeDark,
});
