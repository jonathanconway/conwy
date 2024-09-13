"use client";

import { loadPrismJSTheme } from "../../head/prismjs-theme";
import { Switch, SwitchOption } from "../../switch";
import { Theme, Themes, useSelectedTheme } from "../../theme";

loadPrismJSTheme();

export function ThemeSwitch() {
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();

  const handleClick = (option: SwitchOption) => {
    setSelectedTheme(option.name as Theme);
  };

  const options = Object.values(Themes).map((theme) => ({
    name: theme,
    content: theme,
  }));

  const optionsByKey = Object.fromEntries(
    options.map((option) => [option.name, option]),
  );

  return (
    <Switch
      options={options}
      value={optionsByKey[selectedTheme]}
      onSelect={handleClick}
    />
  );
}
