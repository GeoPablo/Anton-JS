/**
 * File: antonjs.ts
 * Project: antonjs
 * Version:0.0.1
 * Created Date: Thursday, May 28th 2020, 7:04:51 pm
 * Author: Georgian Stan (georgian.stan8@gmail.com)
 * -----
 * Last Modified: Friday, 29th May 2020 8:43:58 am
 * Modified By: Georgian Stan (georgian.stan8@gmail.com>)
 * ------------------------------------
 */

/**
 * * Helpres
 */

import { getPixelsIndexFromDiagonal } from './image-manipulation';

/**
 * * Types
 */
import { ErrorMessages } from './@types';
import { DiagonalOfTheImage } from './image-manipulation/@types';

const getPixelIndex = (numToRound: number): number => {
  //Each pixel is 4 units long: r,g,b,a
  const remainder = numToRound % 4;
  if (remainder == 0) return numToRound;
  return numToRound + 4 - remainder;
};

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
