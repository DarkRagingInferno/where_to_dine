import { Dimensions, Platform, PixelRatio } from "react-native";

export const dimensions = ({
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get("window"));

// screen height & width of a google pixel 3
export const scaleFactorHeight = 737.45 
export const scaleFactorWidth = 392.72

export const wheelItemWidth = dimensions.width * .95;
export const wheelItemHeight = dimensions.height * .55;

// 320 is the pixel constant used for pciture width on a google pixel 3
export const wheelItemPictureWidth = dimensions.height / scaleFactorHeight * 320;

// 211 is the pixel constant used for pciture height on a google pixel 3
export const wheelItemPictureHeight = dimensions.width / scaleFactorWidth * 211;

// based on iphone 5s's scale
const scale = dimensions.width / 320;

export const normalize = (size) => {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
