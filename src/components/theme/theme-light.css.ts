import { createTheme } from "@vanilla-extract/css";

import { aboutMeThemeLight } from "../about-me/about-me.css-theme";
import { articleSummaryThemeLight } from "../article/article-summary/article-summary.css-theme";
import { articlesListItemThemeLight } from "../articles/articles-list/articles-list-item/articles-list-item.css-theme";
import { articlesTagFiltersThemeLight } from "../articles/articles-tag-filters/articles-tag-filters.css-theme";
import { blockQuoteThemeLight } from "../block-quote/block-quote.css-theme";
import { boxThemeLight } from "../box/box.css-theme";
import { buttonThemeLight } from "../button/button.css-theme";
import { codeThemeLight } from "../code/code.css-theme";
import { footerThemeLight } from "../footer/footer.css-theme";
import { headerHamburgerThemeLight } from "../header/header-hamburger/header-hamburger.css-theme";
import { headerLogoThemeLight } from "../header/header-logo/header-logo.css-theme";
import { layoutThemeLight } from "../layouts/layout/layout.css-theme";
import { linkThemeLight } from "../link/link.css-theme";
import { switchThemeLight } from "../switch/switch.css-theme";
import { textThemeLight } from "../text/text.css-theme";
import { tooltipThemeLight } from "../tooltip/tooltip.css-theme";

import { vars } from "./theme-contract.css";

export const themeLightClass = createTheme(vars, {
  aboutMe: aboutMeThemeLight,
  articlesListItem: articlesListItemThemeLight,
  articlesTagFilters: articlesTagFiltersThemeLight,
  articleSummary: articleSummaryThemeLight,
  blockQuote: blockQuoteThemeLight,
  box: boxThemeLight,
  button: buttonThemeLight,
  code: codeThemeLight,
  footer: footerThemeLight,
  headerLogo: headerLogoThemeLight,
  headerHamburger: headerHamburgerThemeLight,
  layout: layoutThemeLight,
  link: linkThemeLight,
  switch: switchThemeLight,
  text: textThemeLight,
  tooltip: tooltipThemeLight,
});
