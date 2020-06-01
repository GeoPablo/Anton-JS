/**
 * File: index.ts
 * Project: antonjs
 * Version:0.0.1
 * Created Date: Friday, May 29th 2020, 7:44:27 am
 * Author: Georgian Stan (georgian.stan8@gmail.com)
 * -----
 * Last Modified: Friday, 29th May 2020 11:52:23 pm
 * Modified By: Georgian Stan (georgian.stan8@gmail.com>)
 * ------------------------------------
 */

/**
 * *  Types
 */
import { HslValues } from './@types';
import { RgbaValue } from '@src/image-operations/@types';

/* *
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [360,100,100].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSL representation
 */
const rgbToHsl = (rgb: RgbaValue): HslValues => {
  let { r, g, b }: { r: number; g: number; b: number } = rgb;

  (r /= 255), (g /= 255), (b /= 255);

  let max: number = Math.max(r, g, b),
    min: number = Math.min(r, g, b);

  let h: number,
    s: number,
    l: number = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return {
    h: h * 60,
    s: s * 100,
    l: l * 100,
  };
};

export { rgbToHsl };
