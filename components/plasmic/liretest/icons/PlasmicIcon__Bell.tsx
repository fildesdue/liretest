// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BellIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BellIcon(props: BellIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
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
        d={
          "M17.6 22.4a1.6 1.6 0 01-3.2 0h3.2zM16 8a.8.8 0 01.8.8v.864c2.272.384 4 2.36 4 4.736v4.8l2.4 2.4H8.8l2.4-2.4v-4.8a4.806 4.806 0 014-4.736V8.8A.8.8 0 0116 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BellIcon;
/* prettier-ignore-end */
