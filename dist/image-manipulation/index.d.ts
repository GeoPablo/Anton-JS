/**
 * File: image-manipulation.ts
 * Project: antonjs
 * Version:0.0.1
 * Created Date: Friday, May 29th 2020, 7:43:40 am
 * Author: Georgian Stan (georgian.stan8@gmail.com)
 * -----
 * Last Modified: Friday, 29th May 2020 1:23:08 pm
 * Modified By: Georgian Stan (georgian.stan8@gmail.com>)
 * ------------------------------------
 */
import { DiagonalOfTheImage } from './@types';
/**
 * * Return am array with the index of the desired pixels
 * @param diagonal - one of the 4 diagonals of a image
 * @param imageData - data about the image
 * @param offest - from how many in how many pixels to count
 */
declare const getPixelsIndexFromDiagonal: (diagonal: DiagonalOfTheImage, imageData: ImageData, offset?: number) => number[];
export { getPixelsIndexFromDiagonal };
