/**
 * File: index.ts
 * Project: antonjs
 * Version:0.0.1
 * Created Date: Friday, May 29th 2020, 7:43:40 am
 * Author: Georgian Stan (georgian.stan8@gmail.com)
 * -----
 * Last Modified: Friday, 29th May 2020 5:36:10 pm
 * Modified By: Georgian Stan (georgian.stan8@gmail.com>)
 * ------------------------------------
 */
import { DiagonalOfTheImage, PixelsRgbaValue } from './@types';
/**
 * * Return am array with the index of the desired pixels
 * @param diagonal - one of the 4 diagonals of a image
 * @param imageData - data about the image
 * @param offest - from how many in how many pixels to count
 */
declare const getPixelsIndexFromDiagonal: (diagonal: DiagonalOfTheImage, imageData: ImageData, offset?: number) => number[];
/**
 * * Get {r,g,b,a} values as object for certain positions
 * @param imageData - data about the image
 * @param pixelsIndex - array with the position of the desired pixels
 */
declare const getRgbaForPixels: (pixelsIndex: number[], imageData: ImageData) => PixelsRgbaValue;
export { getPixelsIndexFromDiagonal, getRgbaForPixels };
