/**
 * File: index.spec.ts
 * Project: antonjs
 * Version:0.0.1
 * Created Date: Friday, May 29th 2020, 10:47:20 pm
 * Author: Georgian Stan (georgian.stan8@gmail.com)
 * -----
 * Last Modified: Friday, 29th May 2020 11:09:50 pm
 * Modified By: Georgian Stan (georgian.stan8@gmail.com>)
 * ------------------------------------
 */

/**
 * * Units to test
 */
import { rgbToHsl } from '.';

/**
 * * Types
 */
import { RgbaValue } from '@src/image-operations/@types';
import { HslValues } from './@types';

interface Dataset {
  valusToTest: RgbaValue;
  expect: HslValues;
}

describe('util', () => {
  describe('rgbToHsl()', () => {
    const datasets: Dataset[] = [
      {
        valusToTest: { r: 0, g: 0, b: 0, a: 255 },
        expect: { h: 0, s: 0, l: 0 },
      },
      {
        valusToTest: { r: 255, g: 255, b: 255, a: 255 },
        expect: { h: 0, s: 0, l: 100 },
      },
      {
        valusToTest: { r: 255, g: 0, b: 0, a: 255 },
        expect: { h: 0, s: 100, l: 50 },
      },
    ];
    datasets.forEach((set: Dataset) => {
      it(`${set.valusToTest} -> ${set.expect}`, () => {
        expect(rgbToHsl(set.valusToTest)).toEqual(set.expect);
      });
    });
  });
});
