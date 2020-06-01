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
 * * Each pixel is 4 units long: r,g,b,a
 * @param pixelIndex - pixel index
 */
//
const getPixelIndexInImageData = (pixelIndex: number): number => pixelIndex * 4;

/**
 * * Return am array with the index of the desired pixels
 * @param diagonal - one of the 4 diagonals of a image
 * @param imageData - data about the image
 * @param offest - from how many in how many pixels to count
 */
const getPixelsIndexFromDiagonal = (
  diagonal: DiagonalOfTheImage,
  imageData: ImageData,
  offset = 1,
): number[] => {
  const lineLength: number = Math.min(imageData.height, imageData.width);

  const pixels: number[] = [];

  switch (diagonal) {
    case DiagonalOfTheImage.TL: {
      for (let i = 0; i < lineLength; i += offset) {
        pixels.push(i * imageData.width + i);
      }
      break;
    }
    case DiagonalOfTheImage.TR: {
      for (let i = 1; i <= lineLength; i += offset) {
        pixels.push((imageData.width - 1) * i);
      }
      break;
    }
    case DiagonalOfTheImage.BL: {
      for (let i = 0; i < lineLength; i += offset) {
        pixels.push((imageData.height - 1 - i) * imageData.width + i);
      }
      break;
    }
    case DiagonalOfTheImage.BR: {
      for (let i = 0; i < lineLength; i += offset) {
        pixels.push((imageData.height - i) * imageData.width - i - 1);
      }
      break;
    }
  }

  return pixels;
};

/**
 * * Get {r,g,b,a} values as object for certain positions
 * @param imageData - data about the image
 * @param pixelsIndex - array with the position of the desired pixels
 */
const getRgbaForPixels = (
  pixelsIndex: number[],
  imageData: ImageData,
): PixelsRgbaValue => {
  const output: PixelsRgbaValue = {};
  const pixelsAsPairOf4: number[] = Array.from(imageData.data);

  pixelsIndex.forEach((pixelIndex: number) => {
    const pixelIndexInImageData = getPixelIndexInImageData(pixelIndex);
    // ? Each pixel is 4 units long: r,g,b,a
    output[pixelIndex] = {
      r: pixelsAsPairOf4[pixelIndexInImageData],
      g: pixelsAsPairOf4[pixelIndexInImageData + 1],
      b: pixelsAsPairOf4[pixelIndexInImageData + 2],
      a: pixelsAsPairOf4[pixelIndexInImageData + 3],
    };
  });

  return output;
};

/**
 * * Get the mean rgba value from multiple pixels
 * @param rgbaValues - pixels index with their rga values
 */
const getMeanRgba = (rgbaValues: PixelsRgbaValue): RgbaValue => {
  let totalRed: number = 0;
  let totalGreen: number = 0;
  let totalBlack: number = 0;
  let totalAplha: number = 0;

  let pixelsNum: number = Object.keys(rgbaValues).length;

  Object.keys(rgbaValues).forEach((pixelIndex: string) => {
    totalRed += rgbaValues[pixelIndex].r;
    totalGreen += rgbaValues[pixelIndex].g;
    totalBlack += rgbaValues[pixelIndex].b;
    totalAplha += rgbaValues[pixelIndex].a;
  });

  return {
    r: Math.floor(totalRed / pixelsNum),
    g: Math.floor(totalGreen / pixelsNum),
    b: Math.floor(totalBlack / pixelsNum),
    a: Math.floor(totalAplha / pixelsNum),
  };
};

/**
 * * Get the vibrant rgba value from multiple pixels
 * * higher red, higher green ...
 * @param rgbaValues - pixels index with their rga values
 */
const getVibrantRgba = (rgbaValues: PixelsRgbaValue): RgbaValue => {
  const min: number = 0;

  const output: RgbaValue = {
    r: min,
    g: min,
    b: min,
    a: min,
  };

  Object.keys(rgbaValues).forEach((pixelIndex: string) => {
    const {
      r,
      g,
      b,
      a,
    }: { r: number; g: number; b: number; a: number } = rgbaValues[pixelIndex];

    output.r = r > output.r ? r : output.r;
    output.g = g > output.g ? g : output.g;
    output.b = b > output.b ? b : output.b;
    output.a = a > output.a ? a : output.a;
  });

  return output;
};




export {
  getPixelsIndexFromDiagonal,
  getRgbaForPixels,
  getMeanRgba,
  getVibrantRgba,
};
