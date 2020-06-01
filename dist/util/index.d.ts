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
declare const rgbToHsl: (rgb: RgbaValue) => HslValues;
export { rgbToHsl };
