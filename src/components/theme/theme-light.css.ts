import { createTheme } from "@vanilla-extract/css";

import { aboutMeThemeLight } from "../about-me/about-me.css-theme";
import { layoutThemeLight } from "../app/app-layout/app-layout.css-theme";
import { articlesTagFiltersThemeLight } from "../articles/articles-tag-filters/articles-tag-filters.css-theme";
import { asideThemeLight } from "../aside/aside.css-theme";
import { blockQuoteDisclaimerThemeLight } from "../block-quote/block-quote-disclaimer/block-quote-disclaimer.css-theme";
import { blockQuoteSummaryThemeLight } from "../block-quote/block-quote-summary/block-quote-summary.css-theme";
import { blockQuoteThemeLight } from "../block-quote/block-quote.css-theme";
import { boxThemeLight } from "../box/box.css-theme";
import { buttonThemeLight } from "../button/button.css-theme";
import { checkboxThemeLight } from "../checkbox/checkbox.css-theme";
import { checklistThemeLight } from "../checklist/checklist.css-theme";
import { codeThemeLight } from "../code/code.css-theme";
import { contentListItemThemeLight } from "../content-list/content-list-item/content-list-item.css-theme";
import { dividerThemeLight } from "../divider/divider.css-theme";
import { engagementPageHeaderNavThemeLight } from "../engagement/engagement-page/engagement-page-header/engagement-page-header-nav/engagement-page-header-nav.css-theme";
import { focusOutlineThemeLight } from "../focus-outline/focus-outline.css-theme";
import { footerThemeLight } from "../footer/footer.css-theme";
import { headerHamburgerThemeLight } from "../header/header-hamburger/header-hamburger.css-theme";
import { headerLogoThemeLight } from "../header/header-logo/header-logo.css-theme";
import { headerNavThemeLight } from "../header/header-nav/header-nav.css-theme";
import { iconThemeLight } from "../icon/icon.css-theme";
import { imageCascadeThemeLight } from "../image-cascade/image-cascade.css-theme";
import { imageFigureThemeLight } from "../image-figure/image-figure.css-theme";
import { imageModalThemeLight } from "../image-modal/image-modal.css-theme";
import { kbdThemeLight } from "../kbd/kbd.css-theme";
import { labelThemeLight } from "../label/label.css-theme";
import { linkBoxTitleThemeLight } from "../link-box/link-box-title/link-box-title.css-theme";
import { linkBoxThemeLight } from "../link-box/link-box.css-theme";
import { linkThemeLight } from "../link/link.css-theme";
import { microsListItemThemeLight } from "../micros/micros-page/micros-page-list/micros-page-list-item/micros-page-list-item.css-theme";
import { switchThemeLight } from "../switch/switch.css-theme";
import { textBoxThemeLight } from "../text-box/text-box.css-theme";
import { textThemeLight } from "../text/text.css-theme";
import { tooltipThemeLight } from "../tooltip/tooltip.css-theme";

import { vars } from "./theme-contract.css";

export const themeLightClass = createTheme(vars, {
  aboutMe: aboutMeThemeLight,
  articlesTagFilters: articlesTagFiltersThemeLight,
  aside: asideThemeLight,
  blockQuote: blockQuoteThemeLight,
  blockQuoteSummary: blockQuoteSummaryThemeLight,
  blockQuoteDisclaimer: blockQuoteDisclaimerThemeLight,
  box: boxThemeLight,
  button: buttonThemeLight,
  checkbox: checkboxThemeLight,
  checklist: checklistThemeLight,
  code: codeThemeLight,
  contentListItem: contentListItemThemeLight,
  divider: dividerThemeLight,
  engagementPageHeaderNav: engagementPageHeaderNavThemeLight,
  focusOutline: focusOutlineThemeLight,
  footer: footerThemeLight,
  headerHamburger: headerHamburgerThemeLight,
  headerLogo: headerLogoThemeLight,
  headerNav: headerNavThemeLight,
  icon: iconThemeLight,
  imageCascade: imageCascadeThemeLight,
  imageFigure: imageFigureThemeLight,
  imageModal: imageModalThemeLight,
  kbd: kbdThemeLight,
  label: labelThemeLight,
  layout: layoutThemeLight,
  link: linkThemeLight,
  linkBox: linkBoxThemeLight,
  linkBoxTitle: linkBoxTitleThemeLight,
  microsListItem: microsListItemThemeLight,
  switch: switchThemeLight,
  text: textThemeLight,
  textBox: textBoxThemeLight,
  tooltip: tooltipThemeLight,
});
