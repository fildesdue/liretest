// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LineDotted3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LineDotted3Icon(props: LineDotted3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 169 1"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeDasharray={"4 2"}
        d={"M0 .5h169"}
      ></path>
    </svg>
  );
}

export default LineDotted3Icon;
/* prettier-ignore-end */
