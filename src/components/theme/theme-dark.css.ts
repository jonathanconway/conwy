import { createTheme } from "@vanilla-extract/css";

import { aboutMeThemeDark } from "../about-me/about-me.css-theme";
import { articlesTagFiltersThemeDark } from "../articles/articles-tag-filters/articles-tag-filters.css-theme";
import { asideThemeDark } from "../aside/aside.css-theme";
import { blockQuoteDisclaimerThemeDark } from "../block-quote/block-quote-disclaimer/block-quote-disclaimer.css-theme";
import { blockQuoteSummaryThemeDark } from "../block-quote/block-quote-summary/block-quote-summary.css-theme";
import { blockQuoteThemeDark } from "../block-quote/block-quote.css-theme";
import { boxThemeDark } from "../box/box.css-theme";
import { buttonThemeDark } from "../button/button.css-theme";
import { checkboxThemeDark } from "../checkbox/checkbox.css-theme";
import { checklistThemeDark } from "../checklist/checklist.css-theme";
import { codeThemeDark } from "../code/code.css-theme";
import { contentListItemThemeDark } from "../content-list/content-list-item/content-list-item.css-theme";
import { dividerThemeDark } from "../divider/divider.css-theme";
import { engagementPageHeaderNavThemeDark } from "../engagement/engagement-page/engagement-page-header/engagement-page-header-nav/engagement-page-header-nav.css-theme";
import { focusOutlineThemeDark } from "../focus-outline/focus-outline.css-theme";
import { footerThemeDark } from "../footer/footer.css-theme";
import { headerHamburgerThemeDark } from "../header/header-hamburger/header-hamburger.css-theme";
import { headerLogoThemeDark } from "../header/header-logo/header-logo.css-theme";
import { headerNavThemeDark } from "../header/header-nav/header-nav.css-theme";
import { iconThemeDark } from "../icon/icon.css-theme";
import { imageCascadeThemeDark } from "../image-cascade/image-cascade.css-theme";
import { imageFigureThemeDark } from "../image-figure/image-figure.css-theme";
import { imageModalThemeDark } from "../image-modal/image-modal.css-theme";
import { kbdThemeDark } from "../kbd/kbd.css-theme";
import { labelThemeDark } from "../label/label.css-theme";
import { layoutThemeDark } from "../layouts/app-layout/app-layout.css-theme";
import { linkBoxTitleThemeDark } from "../link-box/link-box-title/link-box-title.css-theme";
import { linkBoxThemeDark } from "../link-box/link-box.css-theme";
import { linkThemeDark } from "../link/link.css-theme";
import { microsListItemThemeDark } from "../micros/micros-page/micros-page-list/micros-page-list-item/micros-page-list-item.css-theme";
import { switchThemeDark } from "../switch/switch.css-theme";
import { textBoxThemeDark } from "../text-box/text-box.css-theme";
import { textThemeDark } from "../text/text.css-theme";
import { tooltipThemeDark } from "../tooltip/tooltip.css-theme";

import { vars } from "./theme-contract.css";

export const themeDarkClass = createTheme(vars, {
  aboutMe: aboutMeThemeDark,
  articlesTagFilters: articlesTagFiltersThemeDark,
  aside: asideThemeDark,
  blockQuote: blockQuoteThemeDark,
  blockQuoteSummary: blockQuoteSummaryThemeDark,
  blockQuoteDisclaimer: blockQuoteDisclaimerThemeDark,
  box: boxThemeDark,
  button: buttonThemeDark,
  checkbox: checkboxThemeDark,
  checklist: checklistThemeDark,
  code: codeThemeDark,
  contentListItem: contentListItemThemeDark,
  divider: dividerThemeDark,
  engagementPageHeaderNav: engagementPageHeaderNavThemeDark,
  focusOutline: focusOutlineThemeDark,
  footer: footerThemeDark,
  headerHamburger: headerHamburgerThemeDark,
  headerLogo: headerLogoThemeDark,
  headerNav: headerNavThemeDark,
  icon: iconThemeDark,
  imageCascade: imageCascadeThemeDark,
  imageFigure: imageFigureThemeDark,
  imageModal: imageModalThemeDark,
  kbd: kbdThemeDark,
  label: labelThemeDark,
  layout: layoutThemeDark,
  link: linkThemeDark,
  linkBox: linkBoxThemeDark,
  linkBoxTitle: linkBoxTitleThemeDark,
  microsListItem: microsListItemThemeDark,
  switch: switchThemeDark,
  text: textThemeDark,
  textBox: textBoxThemeDark,
  tooltip: tooltipThemeDark,
});
