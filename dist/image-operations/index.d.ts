/**
 * File: index.ts
 * Project: antonjs
 * Version:0.0.1
 * Created Date: Friday, May 29th 2020, 7:43:40 am
 * Author: Georgian Stan (georgian.stan8@gmail.com)
 * -----
 * Last Modified: Monday, 1st June 2020 4:21:47 pm
 * Modified By: Georgian Stan (georgian.stan8@gmail.com>)
 * ------------------------------------
 */
import { DiagonalOfTheImage, PixelsRgbaValue, RgbaValue } from './@types';
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
/**
 * * Get the mean rgba value from multiple pixels
 * @param rgbaValues - pixels index with their rga values
 */
declare const getMeanRgba: (rgbaValues: PixelsRgbaValue) => RgbaValue;
/**
 * * Get the vibrant rgba value from multiple pixels
 * * higher red, higher green ...
 * @param rgbaValues - pixels index with their rga values
 */
declare const getVibrantRgba: (rgbaValues: PixelsRgbaValue) => RgbaValue;
export { getPixelsIndexFromDiagonal, getRgbaForPixels, getMeanRgba, getVibrantRgba, };
