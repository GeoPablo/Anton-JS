/**
 * File: antonjs.ts
 * Project: antonjs
 * Version:0.0.1
 * Created Date: Thursday, May 28th 2020, 7:04:51 pm
 * Author: Georgian Stan (georgian.stan8@gmail.com)
 * -----
 * Last Modified: Monday, 1st June 2020 5:15:50 pm
 * Modified By: Georgian Stan (georgian.stan8@gmail.com>)
 * ------------------------------------
 */
/**
 * * Types
 */
import { PixelsPickupStrategy } from './@types';
/**
 * * Calculate the index of the image
 * @param imageUrl
 * @param pixelsStrategy - what strategy to use to get the pixels
 */
declare const calculateImageIndex: (imageUrl: string, pixelsStrategy: PixelsPickupStrategy.XsInTheCorner) => Promise<number>;
export { calculateImageIndex };
