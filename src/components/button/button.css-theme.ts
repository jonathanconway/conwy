import { colors } from "../styling";

export const buttonThemeBase = {
  background: {
    gradientFrom: {
      color: "",
    },
    gradientTo: {
      color: "",
    },
  },
  border: {
    color: "",
  },
  color: "",
  hover: {
    background: {
      gradientFrom: {
        color: "",
      },
      gradientTo: {
        color: "",
      },
    },
  },
  selected: {
    border: {
      color: "",
    },
    background: {
      gradientFrom: {
        color: "",
      },
      gradientTo: {
        color: "",
      },
    },
  },
};

export const buttonThemeLight = {
  background: {
    gradientFrom: {
      color: colors.stone_100,
    },
    gradientTo: {
      color: colors.stone_300,
    },
  },
  border: {
    color: colors.stone_300,
  },
  color: colors.stone_700,
  hover: {
    background: {
      gradientFrom: {
        color: colors.stone_200,
      },
      gradientTo: {
        color: colors.stone_400,
      },
    },
  },
  selected: {
    border: {
      color: colors.stone_700,
    },
    background: {
      gradientFrom: {
        color: colors.stone_500,
      },
      gradientTo: {
        color: colors.stone_700,
      },
    },
  },
};

export const buttonThemeDark = {
  background: {
    gradientFrom: {
      color: colors.stone_500,
    },
    gradientTo: {
      color: colors.stone_700,
    },
  },
  border: {
    color: colors.stone_700,
  },
  color: colors.stone_700,
  hover: {
    background: {
      gradientFrom: {
        color: colors.stone_400,
      },
      gradientTo: {
        color: colors.stone_600,
      },
    },
  },
  selected: {
    border: {
      color: colors.stone_300,
    },
    background: {
      gradientFrom: {
        color: colors.stone_100,
      },
      gradientTo: {
        color: colors.stone_300,
      },
    },
  },
};
