// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LineDottedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LineDottedIcon(props: LineDottedIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 608 2"}
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
        strokeWidth={"2"}
        strokeDasharray={"4 2"}
        d={"M0 1h608"}
        opacity={".56"}
      ></path>
    </svg>
  );
}

export default LineDottedIcon;
/* prettier-ignore-end */
