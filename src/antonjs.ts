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
 * * Helpres
 */

import {
  getPixelsIndexFromDiagonal,
  getRgbaForPixels,
  getMeanRgba,
  getVibrantRgba,
} from './image-operations';

/**
 * * Types
 */
import { ErrorMessages, PixelsPickupStrategy } from './@types';
import {
  DiagonalOfTheImage,
  PixelsRgbaValue,
  RgbaValue,
} from './image-operations/@types';
import { HslValues } from './util/@types';
import { rgbToHsl } from './util';

/**
 * * Get imageData
 * @param imageUrl - url of the image
 */
const getImageData = (imageUrl: string): Promise<ImageData> => {
  return new Promise(async (resolve, reject) => {
    const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
      document.createElement('canvas')
    );
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
    const img: HTMLImageElement = new Image();

    img.crossOrigin = 'anonymous';
    img.src = imageUrl;

    img.onload = () => {
      try {
        ctx.drawImage(img, 0, 0);

        const data: ImageData = ctx.getImageData(
          0,
          0,
          img.naturalWidth,
          img.naturalHeight,
        );
        resolve(data);
      } catch (err) {
        reject(err);
      }
    };

    img.onerror = (err) => {
      reject(err);
    };
  });
};

/**
 * * Get all the required pixels
 * @param imageData
 */
const getRequiredPixels = (imageData: ImageData): number[] => {
  const tr: number[] = getPixelsIndexFromDiagonal(
    DiagonalOfTheImage.TR,
    imageData,
  );
  const tl: number[] = getPixelsIndexFromDiagonal(
    DiagonalOfTheImage.TL,
    imageData,
  );
  const br: number[] = getPixelsIndexFromDiagonal(
    DiagonalOfTheImage.BR,
    imageData,
  );
  const bl: number[] = getPixelsIndexFromDiagonal(
    DiagonalOfTheImage.BL,
    imageData,
  );

  return [...tr, ...tl, ...br, ...bl];
};

/**
 * * Formula implementation color -> index(number)
 */
const formula = (hslValue: HslValues): number => {
  const { h, s, l }: { h: number; s: number; l: number } = hslValue;

  const definerValue: number = 1;

  return h * definerValue + s + l;
};

const formulaRgba = (hslValue: RgbaValue): number => {
  const { r, g, b } = hslValue;

  const definerValue: number = 1;

  return r * definerValue + g + b;
};

/**
 * * Calculate the index of the image
 * @param imageUrl
 * @param pixelsStrategy - what strategy to use to get the pixels
 */
const calculateImageIndex = async (
  imageUrl: string,
  pixelsStrategy: PixelsPickupStrategy.XsInTheCorner,
  // scoreStrategy,
): Promise<number> => {
  try {
    const imageData: ImageData = await getImageData(imageUrl);
    const requiredPixels: number[] = getRequiredPixels(imageData);
    const pixelsRgba: PixelsRgbaValue = getRgbaForPixels(
      requiredPixels,
      imageData,
    );

    const meanRgbaValue: RgbaValue = getVibrantRgba(pixelsRgba);

    const hslFromRgb: HslValues = rgbToHsl(meanRgbaValue);
    console.log(hslFromRgb);
    // const index: number = formula(hslFromRgb);
    // const index: number = formulaRgba(meanRgbaValue);

    //@ts-ignore
    return {
      imageIndex: Math.round(hslFromRgb.h),
      color: meanRgbaValue,
    };
  } catch (err) {
    throw new Error(ErrorMessages.IMAGE_UNREACHABLE + ' ' + imageUrl);
  }
};

export { calculateImageIndex };
