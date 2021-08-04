// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MessageIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MessageIcon(props: MessageIconProps) {
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
          "M22.4 8H9.6A1.6 1.6 0 008 9.6V24l3.2-3.2h11.2a1.6 1.6 0 001.6-1.6V9.6A1.6 1.6 0 0022.4 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MessageIcon;
/* prettier-ignore-end */
