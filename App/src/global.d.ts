/**
 * file: Typescript third part dependence declare file
 * date: 2020-07-21
 * author: Frank
 * lastModify: Frank 2020-07-21
 */
declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}
declare module '*.png' {
    const value: any;
    export = value;
}
