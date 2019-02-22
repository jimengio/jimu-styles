import React from "react";
import { css, cx } from "emotion";

import { EBackgroundColors } from "../src/colors";
import { jimuMarginClassName } from "../src/preset";
import { EJimuMargin } from "../src/box-model";

interface IProps {}

interface IState {}

export default class ColorDemo extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        <div>背景色</div>
        <div className={styleContainer}>
          {Object.keys(EBackgroundColors).map(key => {
            return (
              <div
                className={cx(
                  styleItem,
                  jimuMarginClassName({
                    top: EJimuMargin.m10,
                    right: EJimuMargin.m24
                  })
                )}
                key={key}
              >
                <div style={{ backgroundColor: EBackgroundColors[key] }} />
                <div>{EBackgroundColors[key]}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const styleContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const styleItem = css`
  padding: 10px 20px;

  > div {
    height: 20px;
    line-height: 20px;
    width: 50px;
    text-align: center;
  }
`;
