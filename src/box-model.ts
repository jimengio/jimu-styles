import { css, cx } from "emotion";

//外边距
export enum EJimuMargin {
  auto = "auto",
  m32 = "32px",
  m24 = "24px",
  m16 = "16px",
  m12 = "12px",
  m10 = "10px",
  m8 = "8px"
}

//内边距
export enum EJimuPadding {
  auto = "auto",
  p32 = "32px",
  p24 = "24px",
  p16 = "16px",
  p12 = "12px",
  p10 = "10px",
  p8 = "8px"
}

export enum EPixelSizeUnit {
  px = "px", //像素单位
  rem = "rem", //相对单位，相对于root dom单位
  em = "em", // 相对单位，相对于parent dom单位
  pt = "pt" //绝对单位
}

export type BasicSizeType = number | string;

/**
 * 将数值类型转换为像素值，默认转为“px”
 * @param size 像素单位值
 */
function parsePX(
  size: BasicSizeType,
  mode: EPixelSizeUnit = EPixelSizeUnit.px
) {
  return typeof size === "number" ? `${size}${mode || "px"}` : size;
}

export function marginClassName(
  size:
    | BasicSizeType
    | {
        top?: BasicSizeType;
        left?: BasicSizeType;
        right?: BasicSizeType;
        bottom?: BasicSizeType;
      }
) {
  if (size == null) {
    return;
  }

  if (typeof size === "number" || typeof size === "string") {
    return css`
      margin: ${parsePX(size)};
    `;
  }

  let mClassName;
  if ("top" in size || "left" in size || "right" in size || "bottom" in size) {
    Object.keys(size).forEach(key => {
      mClassName = cx(
        mClassName,
        css`
          ${`margin-${key}: ${size[key]}`};
        `
      );
    });
  }

  return mClassName;
}

export function paddingClassName(
  size:
    | BasicSizeType
    | {
        top?: BasicSizeType;
        left?: BasicSizeType;
        right?: BasicSizeType;
        bottom?: BasicSizeType;
      }
) {
  if (size == null) {
    return;
  }

  if (typeof size === "number" || typeof size === "string") {
    return css`
      padding: ${parsePX(size)};
    `;
  }

  let pClassName;
  if ("top" in size || "left" in size || "right" in size || "bottom" in size) {
    Object.keys(size).forEach(key => {
      pClassName = cx(
        pClassName,
        css`
          ${`padding-${key}: ${size[key]}`};
        `
      );
    });
  }

  return pClassName;
}
