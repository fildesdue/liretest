// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 141 281"}
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
        d={"M0 140.46V0a140.44 140.44 0 110 280.88V140.46z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
