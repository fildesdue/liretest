// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector5Icon(props: Vector5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 141"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M36.34 140.1L0 4.44A135.741 135.741 0 0126.55 0l9.79 140.1z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
