// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FireSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FireSvgrepoComsvgIcon(props: FireSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M97.103 353.103C97.103 440.86 168.244 512 256 512c87.756 0 158.897-71.14 158.897-158.897 0-88.276-44.138-158.897-14.524-220.69 0 0-47.27 8.828-73.752 79.448 0 0-88.276-88.276-51.394-211.862 0 0-89.847 35.31-80.451 150.069 8.058 98.406-9.396 114.759-9.396 114.759 0-79.448-62.115-114.759-62.115-114.759 17.976 97.104-26.162 123.587-26.162 203.035z"
        }
        fill={"#ffb446"}
      ></path>

      <path
        d={
          "M370.696 390.734c0 66.093-51.033 122.516-117.114 121.241-62.188-1.198-108.457-48.514-103.512-110.321 2.207-27.586 23.172-72.276 57.379-117.517l22.805 13.793C229.517 242.023 256 167.724 256 167.724c17.396 78.283 114.696 98.574 114.696 223.01z"
        }
        fill={"#ffdc64"}
      ></path>

      <path
        d={
          "M211.862 335.448c-8.828 52.966-26.483 72.249-26.483 105.931C185.379 476.69 216.998 512 256 512c39.284 0 70.729-32.097 70.62-71.381-.295-105.508-61.792-158.136-61.792-158.136 8.828 52.966-17.655 79.448-17.655 79.448-11.032-16.546-35.311-26.483-35.311-26.483z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default FireSvgrepoComsvgIcon;
/* prettier-ignore-end */
