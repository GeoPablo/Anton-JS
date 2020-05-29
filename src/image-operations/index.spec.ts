/**
 * File: index.spec.ts
 * Project: antonjs
 * Version:0.0.1
 * Created Date: Friday, May 29th 2020, 8:05:07 am
 * Author: Georgian Stan (georgian.stan8@gmail.com)
 * -----
 * Last Modified: Friday, 29th May 2020 8:45:20 pm
 * Modified By: Georgian Stan (georgian.stan8@gmail.com>)
 * ------------------------------------
 */

/**
 * * Dependencies
 */
import Jimp from 'jimp';
import { readFileSync } from 'fs';
import { join } from 'path';
/**
 * * Units to test
 */
import {
  getPixelsIndexFromDiagonal,
  getRgbaForPixels,
  getVibrantRgba,
  getMeanRgba,
} from './index';

/**
 * * Types
 */
import { DiagonalOfTheImage, PixelsRgbaValue, RgbaValue } from './@types';
// *  Internal Types
interface Dataset {
  imageName: string;
  TLPixelsIndex: number[];
  TRPixelsIndex: number[];
  BLPixelsIndex: number[];
  BRPixelsIndex: number[];
  rgbaValues: PixelsRgbaValue;
  imageData: ImageData;
}

/**
 * * GLobals
 */

let datasets: Dataset[] = JSON.parse(
  readFileSync('mocks/images-details.json', 'utf8'),
);

describe('image-operations', () => {
  describe('getPixelsIndexFromDiagonal() - normal', () => {
    // * use the hardcoded version, because when for will be executed, datasets is still empty
    for (let i = 0; i < datasets.length; i++) {
      describe(`Dataset ${i}`, () => {
        // * TR Diagonal
        it('It should get the correct indexes for TR Diagonal', () => {
          const myTRPixels: number[] = getPixelsIndexFromDiagonal(
            DiagonalOfTheImage.TR,
            datasets[i].imageData,
          );

          expect(myTRPixels).toEqual(datasets[i].TRPixelsIndex);
        });

        // * TL Diagonal
        it('It should get the correct indexes for TL Diagonal', () => {
          const myTLPixels: number[] = getPixelsIndexFromDiagonal(
            DiagonalOfTheImage.TL,
            datasets[i].imageData,
          );

          expect(myTLPixels).toEqual(datasets[i].TLPixelsIndex);
        });

        // * BL Diagonal
        it('It should get the correct indexes for BL Diagonal', () => {
          const myBLPixels: number[] = getPixelsIndexFromDiagonal(
            DiagonalOfTheImage.BL,
            datasets[i].imageData,
          );

          expect(myBLPixels).toEqual(datasets[i].BLPixelsIndex);
        });

        // * BR Diagonal
        it('It should get the correct indexes for BR Diagonal', () => {
          const myBRPixels: number[] = getPixelsIndexFromDiagonal(
            DiagonalOfTheImage.BR,
            datasets[i].imageData,
          );

          expect(myBRPixels).toEqual(datasets[i].BRPixelsIndex);
        });
      });
    }
  });

  describe('getPixelsIndexFromDiagonal() - with offset', () => {
    const forHowMuchOffsestToTest: number = 12;
    for (let i = 2; i < forHowMuchOffsestToTest; i++) {
      describe(`With offset ${i}`, () => {
        for (let j = 0; j < datasets.length; j++) {
          describe(`Dataset ${j}`, () => {
            // * TR Diagonal with offset
            it('It should get the correct indexes for TR Diagonal with offset', () => {
              const myTRPixels: number[] = getPixelsIndexFromDiagonal(
                DiagonalOfTheImage.TR,
                datasets[j].imageData,
                i,
              );

              const expectedWithOffest: number[] = datasets[
                j
              ].TRPixelsIndex.filter((_, k) => k % i === 0);

              expect(myTRPixels).toEqual(expectedWithOffest);
            });

            // * TL Diagonal with offset
            it('It should get the correct indexes for TL Diagonal with offset', () => {
              const myTLPixels: number[] = getPixelsIndexFromDiagonal(
                DiagonalOfTheImage.TL,
                datasets[j].imageData,
                i,
              );

              const expectedWithOffest: number[] = datasets[
                j
              ].TLPixelsIndex.filter((_, k) => k % i === 0);

              expect(myTLPixels).toEqual(expectedWithOffest);
            });

            // * BL Diagonal with offset
            it('It should get the correct indexes for BL Diagonal with offset', () => {
              const myBLPixels: number[] = getPixelsIndexFromDiagonal(
                DiagonalOfTheImage.BL,
                datasets[j].imageData,
                i,
              );

              const expectedWithOffest: number[] = datasets[
                j
              ].BLPixelsIndex.filter((_, k) => k % i === 0);

              expect(myBLPixels).toEqual(expectedWithOffest);
            });

            // * BR Diagonal with offset
            it('It should get the correct indexes for BR Diagonal with offset', () => {
              const myBRPixels: number[] = getPixelsIndexFromDiagonal(
                DiagonalOfTheImage.BR,
                datasets[j].imageData,
                i,
              );

              const expectedWithOffest: number[] = datasets[
                j
              ].BRPixelsIndex.filter((_, k) => k % i === 0);

              expect(myBRPixels).toEqual(expectedWithOffest);
            });
          });
        }
      });
    }
  });

  describe('getRgbaForPixels()', () => {
    for (let i = 0; i < datasets.length; i++) {
      describe(`Dataset ${i}`, () => {
        it('It should get the correct rgba values', () => {
          const allPixels: number =
            datasets[i].imageData.height * datasets[i].imageData.width;
          const pixelsIndexes: number[] = [];

          for (let i = 0; i < allPixels; i++) {
            pixelsIndexes.push(i);
          }

          const expectedValues: PixelsRgbaValue = {};

          pixelsIndexes.forEach((pixelIndex: number) => {
            expectedValues[pixelIndex] = datasets[i].rgbaValues[pixelIndex];
          });

          const valuesToTest: PixelsRgbaValue = getRgbaForPixels(
            pixelsIndexes,
            datasets[i].imageData,
          );

          expect(expectedValues).toEqual(valuesToTest);
        });
      });
    }
  });

  describe('getVibrantRgba() and getMeanRgba()', () => {
    const testData: PixelsRgbaValue = {
      '0': {
        r: 2,
        g: 200,
        b: 3,
        a: 5,
      },
      '1': {
        r: 150,
        g: 10,
        b: 180,
        a: 255,
      },
    };
    const knownVibrantRgba: RgbaValue = {
      r: 150,
      g: 200,
      b: 180,
      a: 255,
    };

    const knownMeanRgba: RgbaValue = {
      r: 76,
      g: 105,
      b: 91,
      a: 130,
    };

    it('Should get the vibrant rgba color', () => {
      expect(getVibrantRgba(testData)).toEqual(knownVibrantRgba);
    });

    it('Should get the mean rgba color', () => {
      expect(getMeanRgba(testData)).toEqual(knownMeanRgba);
    });
  });
});
