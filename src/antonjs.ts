/**
 * File: antonjs.ts
 * Project: antonjs
 * Version:0.0.1
 * Created Date: Thursday, May 28th 2020, 7:04:51 pm
 * Author: Georgian Stan (georgian.stan8@gmail.com)
 * -----
 * Last Modified: Friday, 29th May 2020 5:20:19 pm
 * Modified By: Georgian Stan (georgian.stan8@gmail.com>)
 * ------------------------------------
 */

/**
 * * Helpres
 */

import { getPixelsIndexFromDiagonal } from './image-operations';

/**
 * * Types
 */
import { ErrorMessages } from './@types';
import { DiagonalOfTheImage } from './image-operations/@types';

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
 * * Calculate the index of the image
 * @param imageUrl *
 */
const calculateImageIndex = async (imageUrl: string) => {
  try {
    const imageData: ImageData = await getImageData(imageUrl);
    console.log(imageData);
    console.log(getPixelsIndexFromDiagonal(DiagonalOfTheImage.TR, imageData));
  } catch (err) {
    throw new Error(ErrorMessages.IMAGE_UNREACHABLE + ' ' + imageUrl);
  }
};

export { calculateImageIndex };
