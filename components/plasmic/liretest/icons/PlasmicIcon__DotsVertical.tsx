// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DotsVerticalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DotsVerticalIcon(props: DotsVerticalIconProps) {
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
          "M16 19.2a1.6 1.6 0 110 3.2 1.6 1.6 0 010-3.2zm0-4.8a1.6 1.6 0 110 3.2 1.6 1.6 0 010-3.2zm0-4.8a1.6 1.6 0 110 3.2 1.6 1.6 0 010-3.2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DotsVerticalIcon;
/* prettier-ignore-end */
