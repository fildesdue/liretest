// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EssentialIconsRightArrowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EssentialIconsRightArrowIcon(
  props: EssentialIconsRightArrowIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M12.744 5.59a.833.833 0 111.179-1.18l5 5a.833.833 0 010 1.18l-5 5a.833.833 0 01-1.179-1.18l3.578-3.577H1.676A.838.838 0 01.833 10c0-.46.378-.833.843-.833h14.646l-3.578-3.578z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EssentialIconsRightArrowIcon;
/* prettier-ignore-end */
