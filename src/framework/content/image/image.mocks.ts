import { Image } from "./image";

export function createImageMock1(): Image {
  return {
    src: "/images/tools/darn-tough-socks.png",
    alt: "Darn Tough socks",
  };
}

export function createImageMock2(): Image {
  return {
    src: "/images/tools/vlc.png",
    alt: "VLC",
  };
}

export function createImageMock3(): Image {
  return {
    src: "/images/tools/utm.png",
    alt: "UTM",
  };
}

export function createImageMock4(): Image {
  return {
    src: "/images/tools/dash.png",
    alt: "Dash",
  };
}

export function createImagesMock(): readonly Image[] {
  return [
    createImageMock1(),
    createImageMock2(),
    createImageMock3(),
    createImageMock4(),
  ];
}
