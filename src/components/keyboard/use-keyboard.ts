// import { KeyboardEventHandler, useEffect } from "react";

// import { TypeOfConst } from "@/framework";

// type UseKeyboardParams = Record<UseKeyboardParamsKey, KeyboardHandler>;

// type UseKeyboardParamsKey = Key | KeyCombination;

// type KeyCombination =
//   | `${Modifier}+${Key}`
//   | `${Modifier}+${Modifier}+${Key}`
//   | `${Modifier}+${Modifier}+${Modifier}+${Key}`
//   | `${Modifier}+${Modifier}+${Modifier}+${Modifier}+${Key}`;

// type Key = string;

// type KeyboardEventType = "keydown" | "keypress" | "keyup";

// type KeyboardHandler =
//   | KeyboardEventHandler
//   | Partial<Record<KeyboardEventType, KeyboardEventHandler>>;

// const Modifiers = {
//   Alt: "alt",
//   Ctrl: "ctrl",
//   Meta: "meta",
//   Shift: "shift",
// };

// type Modifier = TypeOfConst<typeof Modifiers>;

// export function useKeyboard(params: UseKeyboardParams) {
//   const paramsByKey = Object.entries(params).map(([ paramKeyCombination, paramValue ]) => {
//     if (paramKeyCombination.includes("+")) {
//       return [paramKeyCombination.split("+")[0], { paramValue];
//     }
//     return [paramKeyCombination;
//   })

//   const handleWindowKey = (eventType: KeyboardEventType) => (event: KeyboardEvent) => {

//     const key = event.key;

//     if (params[event.key]) {

//     }
//   };

//     useEffect(() => {
//       window.addEventListener("keydown", handleWindowKey("keydown"));
//       window.addEventListener("keyup", handleWindowKey("keyup"));
//       window.addEventListener("keypress", handleWindowKey("keypress"));

//       return () => {
//         window.removeEventListener("keydown", handleWindowKey("keydown"));
//         window.removeEventListener("keyup", handleWindowKey("keyup"));
//         window.removeEventListener("keypress", handleWindowKey("keypress"));

//       };
//     }, []);
// }
