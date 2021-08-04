// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 14"}
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
          "M14.293 1.707A1 1 0 0115.707.293l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L18.586 8H1.011A1.006 1.006 0 010 7c0-.552.453-1 1.011-1h17.575l-4.293-4.293z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
