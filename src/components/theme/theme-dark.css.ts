import { createTheme } from "@vanilla-extract/css";

import { aboutMeThemeDark } from "../about-me/about-me.css-theme";
import { articleSummaryThemeDark } from "../article/article-summary/article-summary.css-theme";
import { articlesListItemThemeDark } from "../articles/articles-list/articles-list-item/articles-list-item.css-theme";
import { articlesTagFiltersThemeDark } from "../articles/articles-tag-filters/articles-tag-filters.css-theme";
import { blockQuoteThemeDark } from "../block-quote/block-quote.css-theme";
import { boxThemeBase } from "../box/box.css-theme";
import { buttonThemeDark } from "../button/button.css-theme";
import { codeThemeDark } from "../code/code.css-theme";
import { footerThemeDark } from "../footer/footer.css-theme";
import { headerHamburgerThemeDark } from "../header/header-hamburger/header-hamburger.css-theme";
import { headerLogoThemeDark } from "../header/header-logo/header-logo.css-theme";
import { layoutThemeDark } from "../layouts/layout/layout.css-theme";
import { linkThemeDark } from "../link/link.css-theme";
import { switchThemeDark } from "../switch/switch.css-theme";
import { textThemeDark } from "../text/text.css-theme";
import { tooltipThemeDark } from "../tooltip/tooltip.css-theme";

import { vars } from "./theme-contract.css";

export const themeDarkClass = createTheme(vars, {
  aboutMe: aboutMeThemeDark,
  articlesListItem: articlesListItemThemeDark,
  articlesTagFilters: articlesTagFiltersThemeDark,
  articleSummary: articleSummaryThemeDark,
  blockQuote: blockQuoteThemeDark,
  box: boxThemeBase,
  button: buttonThemeDark,
  code: codeThemeDark,
  footer: footerThemeDark,
  headerHamburger: headerHamburgerThemeDark,
  headerLogo: headerLogoThemeDark,
  layout: layoutThemeDark,
  link: linkThemeDark,
  switch: switchThemeDark,
  text: textThemeDark,
  tooltip: tooltipThemeDark,
});
