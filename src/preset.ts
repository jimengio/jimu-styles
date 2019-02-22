import { cx, css } from "emotion";
import {
  EBackgroundColors,
  EBorderColors,
  EFontColors,
  EOperateStatusColors
} from "./colors";
import { EJimuMargin, EJimuPadding, marginClassName } from "./box-model";

export let clearLink = css`
  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

export let scrollbar = css`
  overflow: auto;
`;

// presets

export const displayFlex = css`
  display: flex;
`;

export const displayInlineFlex = css`
  display: inline-flex;
`;

export const displayBlock = css`
  display: block;
`;

export const displayInlineBlock = css`
  display: inline-block;
`;

export const flexWrap = css`
  flex-wrap: wrap;
`;

export const alignContentStart = css`
  align-content: flex-start;
`;

export const alignItemStart = css`
  align-items: flex-start;
`;

export const alignItemCenter = css`
  align-items: center;
`;

export const alignItemEnd = css`
  align-items: flex-end;
`;

export const justifyStart = css`
  justify-content: flex-start;
`;

export const justifyCenter = css`
  justify-content: center;
`;

export const justifyEnd = css`
  justify-content: flex-end;
`;

export const noShrink = css`
  flex-shrink: 0;
`;

export const inlineBlock = css`
  display: inline-block;
`;

export const verticalAlignBottom = css`
  vertical-align: bottom;
`;

export const relative = css`
  position: relative;
`;

export const absCenter = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const absLeftCenter = css`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const absRightCenter = css`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const absRightTop = css`
  position: absolute;
  right: 0;
  top: 0;
`;

export const absLeftTop = css`
  position: absolute;
  left: 0;
  top: 0;
`;

export const yAutoXHidden = css`
  overflow-y: auto;
  overflow-x: hidden;
`;

export const overflowAuto = css`
  overflow: auto;
`;

export const overflowHidden = css`
  overflow: hidden;
`;

export const mainHeaderTitle = css`
  font-size: 18px;
`;

export const padding12 = css`
  padding: 12px;
`;

export const padding16 = css`
  padding: 16px;
`;

export const padding24 = css`
  padding: 24px;
`;

export const padding32 = css`
  padding: 32px;
`;

export const padding8 = css`
  padding: 8px;
`;

export const padding10 = css`
  padding: 10px;
`;

export const paddingHorizontal10 = css`
  padding: 0 10px;
`;

export const paddingHorizontal20 = css`
  padding: 0 20px;
`;

export const paddingHorizontal24 = css`
  padding: 0 24px;
`;

export const paddingVertical10 = css`
  padding: 10px 0;
`;

export const padding0 = css`
  padding: 0;
`;

export const paddingTop24 = css`
  padding-top: 24px;
`;

export const paddingTop16 = css`
  padding-top: 16px;
`;

export const paddingTop8 = css`
  padding-top: 8px;
`;

export const paddingTop0 = css`
  padding-top: 0;
`;

export const paddingBottom24 = css`
  padding-bottom: 24px;
`;

export const paddingBottom16 = css`
  padding-bottom: 16px;
`;

export const paddingBottom8 = css`
  padding-bottom: 8px;
`;

export const paddingBottom0 = css`
  padding-bottom: 0;
`;

export const paddingLeft24 = css`
  padding-left: 24px;
`;

export const paddingLeft16 = css`
  padding-left: 16px;
`;

export const paddingLeft8 = css`
  padding-left: 8px;
`;

export const paddingLeft0 = css`
  padding-left: 0;
`;

export const paddingRight24 = css`
  padding-right: 24px;
`;

export const paddingRight16 = css`
  padding-right: 16px;
`;

export const paddingRight8 = css`
  padding-right: 8px;
`;

export const paddingRight0 = css`
  padding-right: 0;
`;

//jimu margin style
export function jimuMarginClassName(
  size:
    | EJimuMargin
    | {
        top?: EJimuMargin;
        left?: EJimuMargin;
        right?: EJimuMargin;
        bottom?: EJimuMargin;
      }
) {
  return marginClassName(size);
}

export const margin0Auto = css`
  margin: 0 auto;
`;

export const marginAuto = css`
  margin: auto;
`;

export const marginTop0AtFirstChild = css`
  &:first-child {
    margin-top: 0;
  }
`;

export const marginBottom0AtLastChild = css`
  &:last-child {
    margin-bottom: 0;
  }
`;

export const paddingRight0AtLastChild = css`
  &:last-child {
    padding-right: 0;
  }
`;

export const mainHeaderHeight = css`
  height: 65px;
`;

export const height100Percent = css`
  height: 100%;
`;

export const minHeight0 = css`
  min-height: 0;
`;

export const width100Percent = css`
  width: 100%;
`;

export const minWidth0 = css`
  min-width: 0;
`;

export const width80Percent = css`
  width: 80%;
`;

export const width50Percent = css`
  width: 50%;
`;

export const width33Percent = css`
  width: 33.33%;
`;

export const width10Percent = css`
  width: 10%;
`;

export const width20Percent = css`
  width: 20%;
`;

export const width100Px = css`
  width: 100px;
`;

export const width200Px = css`
  width: 200px;
`;

export const width400Px = css`
  width: 400px;
`;

export const minWidth200Px = css`
  min-width: 200px;
`;

export const minWidth400Px = css`
  min-width: 400px;
`;

export const borderTop = css`
  border-top: solid 1px ${EBorderColors.default};
`;

export const borderBottom = css`
  border-bottom: solid 1px ${EBorderColors.default};
`;

export const borderRight = css`
  border-right: solid 1px ${EBorderColors.default};
`;

export const borderLeft = css`
  border-left: solid 1px ${EBorderColors.default};
`;

export const border = css`
  border: solid 1px ${EBorderColors.default};
`;

export const cursorPointer = css`
  cursor: pointer;
`;

export const cursorNotAllowed = css`
  cursor: not-allowed;
`;

export const lineHeight12 = css`
  line-height: 1.2em; /* line-height: 1 有时会导致文字上下溢出被截断，1.2比较保险 */
`;

export const antdTableContainer = css`
  min-height: 0;
  height: 100%;

  .ant-table-small {
    border: none;
    border-radius: 0;

    .ant-table-body {
      max-height: calc(100% - 38px); /* 父容器100% - header */
      overflow: auto;
    }
  }

  .ant-table-middle {
    .ant-table-body {
      max-height: calc(100% - 46px); /* 父容器100% - header */
      overflow: auto;
    }
  }

  .ant-table-fixed-header .ant-table-scroll .ant-table-header {
    overflow: hidden;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .ant-spin-container {
    height: 100%;
    display: flex;
    flex-direction: column;

    .ant-table {
      min-height: 0;
      flex: 1;
    }

    .ant-table-pagination {
      flex-shrink: 0;
      align-self: flex-end;
    }
  }

  .ant-table-body {
    max-height: calc(100% - 46px); /* 父容器100% - header */
    overflow: auto;
  }

  .ant-table-wrapper,
  .ant-spin-nested-loading,
  .ant-table-content,
  .ant-table-scroll {
    height: 100%;
  }
`;

export const antdTableContainerWithoutHeader = css`
  min-height: 0;
  height: 100%;

  .ant-table-small {
    border: none;
    border-radius: 0;

    .ant-table-body {
      max-height: 100%; /* 父容器100% - header */
      overflow: auto;
    }
  }

  .ant-table-middle {
    .ant-table-body {
      max-height: 100%; /* 父容器100% - header */
      overflow: auto;
    }
  }

  .ant-table-fixed-header .ant-table-scroll .ant-table-header {
    overflow: hidden;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .ant-spin-container {
    height: 100%;
    display: flex;
    flex-direction: column;

    .ant-table {
      min-height: 0;
      flex: 1;
    }

    .ant-table-pagination {
      flex-shrink: 0;
      align-self: flex-end;
    }
  }

  .ant-table-body {
    max-height: 100%; /* 父容器100% - header */
    overflow: auto;
  }

  .ant-table-wrapper,
  .ant-spin-nested-loading,
  .ant-table-content,
  .ant-table-scroll {
    height: 100%;
  }
`;

export const textAlignCenter = css`
  text-align: center;
`;

export const textAlignRight = css`
  text-align: right;
`;

export const forceMarginBottom0 = css`
  margin-bottom: 0 !important;
`;

export const minHeight100 = css`
  min-height: 100px;
`;

export const displayNone = css`
  display: none;
`;

export const styleOperationBtns = css`
  .ant-btn:not(:last-child) {
    margin-right: 32px;
  }
`;

export const textEllipsis = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const selectedBGColor = css`
  background-color: ${EBackgroundColors.selected};
`;

export const promptInfo = css`
  display: inline-block;
  padding: 5px 10px;
  background-color: #e6f7ff;
  border: 1px solid #91d5ff;
  border-radius: 4px;
  line-height: 1.5;
`;

export const noWrap = css`
  white-space: nowrap;
`;

export const enabledBtn = css`
  color: ${EBackgroundColors.primary};
  cursor: pointer;
`;

export const disabledBtn = css`
  color: ${EBackgroundColors.disabled};
  cursor: not-allowed;
`;
