import { TypeOfConst } from "@/framework/client";

export const IllustrationTypes = {
  App: "app",
  Box: "box",
  Bug: "bug",
  Code: "code",
  ComputerScreen: "computer-screen",
  ComputerScreenWithBugAndCode: "computer-screen-with-bug-and-code",
  ComputerScreenWithEarth: "computer-screen-with-earth",
  ComputerScreenWithEarthAndNeuralNet:
    "computer-screen-with-earth-and-neural-net",
  Earth: "earth",
  Exercise: "exercise",
  KeyboardKey: "keyboard-key",
  KeyboardShortcuts: "keyboard-shortcuts",
  NeuralNet: "neural-net",
  Page: "page",
  PageWithTicksAndCrosses: "page-with-ticks-and-crosses",
  Person: "person",
  Robot: "robot",
  StickFigure: "stick-figure",
  StickFigureJumping: "stick-figure-jumping",
  Tick: "tick",
  UserFlow: "user-flow",
} as const;

export type IllustrationType = TypeOfConst<typeof IllustrationTypes>;
