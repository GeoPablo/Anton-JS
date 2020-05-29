/**
 * File: pixels.interface.ts
 * Project: antonjs
 * Version:0.0.1
 * Created Date: Friday, May 29th 2020, 3:45:09 pm
 * Author: Georgian Stan (georgian.stan8@gmail.com)
 * -----
 * Last Modified: Friday, 29th May 2020 3:45:57 pm
 * Modified By: Georgian Stan (georgian.stan8@gmail.com>)
 * ------------------------------------
 */
export interface PixelsRgbaValue {
    [pixelIndex: number]: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
}
