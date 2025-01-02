import { createTheme } from "@vanilla-extract/css";

import { aboutMeThemeLight } from "../about-me/about-me.css-theme";
import { articleSummaryThemeLight } from "../article/article-summary/article-summary.css-theme";
import { articlesTagFiltersThemeLight } from "../articles/articles-tag-filters/articles-tag-filters.css-theme";
import { asideThemeLight } from "../aside/aside.css-theme";
import { blockQuoteThemeLight } from "../block-quote/block-quote.css-theme";
import { boxThemeLight } from "../box/box.css-theme";
import { buttonThemeLight } from "../button/button.css-theme";
import { codeThemeLight } from "../code/code.css-theme";
import { contentListItemThemeLight } from "../content-list/content-list-item/content-list-item.css-theme";
import { footerThemeLight } from "../footer/footer.css-theme";
import { headerHamburgerThemeLight } from "../header/header-hamburger/header-hamburger.css-theme";
import { headerLogoThemeLight } from "../header/header-logo/header-logo.css-theme";
import { iconThemeLight } from "../icon/icon.css-theme";
import { imageFigureThemeLight } from "../image-figure/image-figure.css-theme";
import { imageModalThemeLight } from "../image-modal/image-modal.css-theme";
import { itemNavThemeLight } from "../item/item-nav/item-nav.css-theme";
import { labelThemeLight } from "../label/label.css-theme";
import { layoutThemeLight } from "../layouts/app-layout/app-layout.css-theme";
import { linkBoxTitleThemeLight } from "../link-box/link-box-title/link-box-title.css-theme";
import { linkBoxThemeLight } from "../link-box/link-box.css-theme";
import { linkThemeLight } from "../link/link.css-theme";
import { microsListItemThemeLight } from "../micros/micros-list/micros-list-item/micros-list-item.css-theme";
import { switchThemeLight } from "../switch/switch.css-theme";
import { textThemeLight } from "../text/text.css-theme";
import { tooltipThemeLight } from "../tooltip/tooltip.css-theme";

import { vars } from "./theme-contract.css";

export const themeLightClass = createTheme(vars, {
  aboutMe: aboutMeThemeLight,
  articlesTagFilters: articlesTagFiltersThemeLight,
  articleSummary: articleSummaryThemeLight,
  aside: asideThemeLight,
  blockQuote: blockQuoteThemeLight,
  box: boxThemeLight,
  button: buttonThemeLight,
  code: codeThemeLight,
  contentListItem: contentListItemThemeLight,
  footer: footerThemeLight,
  headerHamburger: headerHamburgerThemeLight,
  headerLogo: headerLogoThemeLight,
  icon: iconThemeLight,
  imageFigure: imageFigureThemeLight,
  imageModal: imageModalThemeLight,
  itemNav: itemNavThemeLight,
  label: labelThemeLight,
  layout: layoutThemeLight,
  link: linkThemeLight,
  linkBox: linkBoxThemeLight,
  linkBoxTitle: linkBoxTitleThemeLight,
  microsListItem: microsListItemThemeLight,
  switch: switchThemeLight,
  text: textThemeLight,
  tooltip: tooltipThemeLight,
});
