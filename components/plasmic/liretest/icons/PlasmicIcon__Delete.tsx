// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeleteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeleteIcon(props: DeleteIconProps) {
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
          "M21.6 9.6h-2.8l-.8-.8h-4l-.8.8h-2.8v1.6h11.2V9.6zm-10.4 12a1.6 1.6 0 001.6 1.6h6.4a1.6 1.6 0 001.6-1.6V12h-9.6v9.6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DeleteIcon;
/* prettier-ignore-end */
