// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconRightIcon(props: IconRightIconProps) {
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
          "M16 22.4a6.4 6.4 0 100-12.8 6.4 6.4 0 000 12.8zM16 8a8 8 0 110 16c-4.424 0-8-3.6-8-8a8 8 0 018-8zm.4 4v4.2l3.6 2.136-.6.984-4.2-2.52V12h1.2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconRightIcon;
/* prettier-ignore-end */
