/**
 * File: index.spec.ts
 * Project: antonjs
 * Version:0.0.1
 * Created Date: Friday, May 29th 2020, 8:05:07 am
 * Author: Georgian Stan (georgian.stan8@gmail.com)
 * -----
 * Last Modified: Friday, 29th May 2020 1:49:22 pm
 * Modified By: Georgian Stan (georgian.stan8@gmail.com>)
 * ------------------------------------
 */

import Jimp from 'jimp';
import { getPixelsIndexFromDiagonal } from './index';
import { DiagonalOfTheImage } from './@types';

/**
 * * Internal Types
 */

interface Dataset {
  data: ImageData;
  expected: {
    TR: number[];
    TL: number[];
    BR: number[];
    BL: number[];
  };
}
let datasets: Dataset[] = [];

/**
 * * Helpers
 */
const getImageData = async (imagePath: string): Promise<ImageData> => {
  return new Promise((resolve, reject) => {
    Jimp.read(imagePath, function (err, image: any) {
      const imageHeight: number = image.getHeight();
      const imageWidth: number = image.getWidth();

      const imageData = {
        //@ts-ignore
        data: [],
        height: imageHeight,
        width: imageWidth,
      };

      for (let i = 0; i < imageWidth; i++) {
        for (let j = 0; j < imageHeight; j++) {
          const pixel = Jimp.intToRGBA(image.getPixelColor(i, j));
          //@ts-ignore
          imageData.data.push(...Object.values(pixel));
        }
      }

      //@ts-ignore
      resolve(imageData);
    });
  });
};

describe('Image-manipulation', () => {
  // * Prepare data sets
  beforeAll(async () => {
    return new Promise(async (resolve, rejcet) => {
      // * dataset 1
      const imageData1 = await getImageData('mocks/12x8.png');
      const TLPixels1: number[] = [0, 13, 26, 39, 52, 65, 78, 91];
      const TRPixels1: number[] = [11, 22, 33, 44, 55, 66, 77, 88];
      const BLPixels1: number[] = [84, 73, 62, 51, 40, 29, 18, 7];
      const BRPixels1: number[] = [95, 82, 69, 56, 43, 30, 17, 4];

      datasets.push({
        data: imageData1,
        expected: {
          TL: TLPixels1,
          TR: TRPixels1,
          BR: BRPixels1,
          BL: BLPixels1,
        },
      });

      // * dataset 2
      const imageData2 = await getImageData('mocks/7x10.png');
      const TLPixels2: number[] = [0, 8, 16, 24, 32, 40, 48];
      const TRPixels2: number[] = [6, 12, 18, 24, 30, 36, 42];
      const BLPixels2: number[] = [63, 57, 51, 45, 39, 33, 27];
      const BRPixels2: number[] = [69, 61, 53, 45, 37, 29, 21];

      datasets.push({
        data: imageData2,
        expected: {
          TL: TLPixels2,
          TR: TRPixels2,
          BR: BRPixels2,
          BL: BLPixels2,
        },
      });

      // * dataset 3
      const imageData3 = await getImageData('mocks/5x5.png');
      const TLPixels3: number[] = [0, 6, 12, 18, 24];
      const TRPixels3: number[] = [4, 8, 12, 16, 20];
      const BLPixels3: number[] = [20, 16, 12, 8, 4];
      const BRPixels3: number[] = [24, 18, 12, 6, 0];

      datasets.push({
        data: imageData3,
        expected: {
          TL: TLPixels3,
          TR: TRPixels3,
          BR: BRPixels3,
          BL: BLPixels3,
        },
      });

      resolve();
    });
  });

  // * use the hardcoded version, because when for will be executed, datasets is still empty
  describe('getPixelsIndexFromDiagonal() - normal', () => {
    for (let i = 0; i < 3; i++) {
      describe(`Dataset ${i}`, () => {
        // * TR Diagonal
        it('It should get the correct indexes for TR Diagonal', () => {
          const myTRPixels: number[] = getPixelsIndexFromDiagonal(
            DiagonalOfTheImage.TR,
            datasets[i].data,
          );

          expect(myTRPixels).toEqual(datasets[i].expected.TR);
        });

        // * TL Diagonal
        it('It should get the correct indexes for TL Diagonal', () => {
          const myTLPixels: number[] = getPixelsIndexFromDiagonal(
            DiagonalOfTheImage.TL,
            datasets[i].data,
          );

          expect(myTLPixels).toEqual(datasets[i].expected.TL);
        });

        // * BL Diagonal
        it('It should get the correct indexes for BL Diagonal', () => {
          const myBLPixels: number[] = getPixelsIndexFromDiagonal(
            DiagonalOfTheImage.BL,
            datasets[i].data,
          );

          expect(myBLPixels).toEqual(datasets[i].expected.BL);
        });

        // * BR Diagonal
        it('It should get the correct indexes for BR Diagonal', () => {
          const myBRPixels: number[] = getPixelsIndexFromDiagonal(
            DiagonalOfTheImage.BR,
            datasets[i].data,
          );

          expect(myBRPixels).toEqual(datasets[i].expected.BR);
        });
      });
    }
  });

  describe('getPixelsIndexFromDiagonal() - with offset', () => {
    for (let i = 2; i < 12; i++) {
      describe(`With offset ${i}`, () => {
        for (let j = 0; j < 2; j++) {
          describe(`Dataset ${j}`, () => {
            // * TR Diagonal with offset
            it('It should get the correct indexes for TR Diagonal with offset', () => {
              const myTRPixels: number[] = getPixelsIndexFromDiagonal(
                DiagonalOfTheImage.TR,
                datasets[j].data,
                i,
              );

              const expectedWithOffest: number[] = datasets[
                j
              ].expected.TR.filter((_, k) => k % i === 0);

              expect(myTRPixels).toEqual(expectedWithOffest);
            });

            // * TL Diagonal with offset
            it('It should get the correct indexes for TL Diagonal with offset', () => {
              const myTLPixels: number[] = getPixelsIndexFromDiagonal(
                DiagonalOfTheImage.TL,
                datasets[j].data,
                i,
              );

              const expectedWithOffest: number[] = datasets[
                j
              ].expected.TL.filter((_, k) => k % i === 0);

              expect(myTLPixels).toEqual(expectedWithOffest);
            });

            // * BL Diagonal with offset
            it('It should get the correct indexes for BL Diagonal with offset', () => {
              const myBLPixels: number[] = getPixelsIndexFromDiagonal(
                DiagonalOfTheImage.BL,
                datasets[j].data,
                i,
              );

              const expectedWithOffest: number[] = datasets[
                j
              ].expected.BL.filter((_, k) => k % i === 0);

              expect(myBLPixels).toEqual(expectedWithOffest);
            });

            // * BR Diagonal with offset
            it('It should get the correct indexes for BR Diagonal with offset', () => {
              const myBRPixels: number[] = getPixelsIndexFromDiagonal(
                DiagonalOfTheImage.BR,
                datasets[j].data,
                i,
              );

              const expectedWithOffest: number[] = datasets[
                j
              ].expected.BR.filter((_, k) => k % i === 0);

              expect(myBRPixels).toEqual(expectedWithOffest);
            });
          });
        }
      });
    }
  });
});
