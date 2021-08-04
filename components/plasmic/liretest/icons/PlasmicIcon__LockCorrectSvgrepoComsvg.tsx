// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LockCorrectSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LockCorrectSvgrepoComsvgIcon(
  props: LockCorrectSvgrepoComsvgIconProps
) {
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
          "M411.151 201.697H100.849c-12.853 0-23.273 10.42-23.273 23.273v263.758c0 12.853 10.42 23.273 23.273 23.273h310.303c12.853 0 23.273-10.42 23.273-23.273V224.97c-.001-12.853-10.421-23.273-23.274-23.273z"
        }
        fill={"#ffb655"}
      ></path>

      <path
        d={
          "M170.667 131.877c0-47.051 38.281-85.332 85.333-85.332s85.333 38.281 85.333 85.332v69.82h46.545v-69.82C387.879 59.161 328.718 0 256 0S124.121 59.161 124.121 131.877v69.82h46.545v-69.82z"
        }
        fill={"#c3c3c7"}
      ></path>

      <path
        d={
          "M321.91 307.423c-9.087-9.089-23.824-9.089-32.912 0L256 340.421l-16.485 16.485-16.514-16.514c-9.087-9.089-23.824-9.089-32.912 0-9.089 9.087-9.089 23.823 0 32.912l32.97 32.97c4.544 4.544 10.501 6.817 16.455 6.817s11.913-2.271 16.455-6.817l.029-.028 65.91-65.911c9.092-9.088 9.092-23.824.002-32.912z"
        }
        fill={"#79ab03"}
      ></path>

      <path
        d={
          "M100.848 512H256V406.246l-.029.029a23.202 23.202 0 01-16.455 6.817 23.188 23.188 0 01-16.455-6.817l-32.97-32.97c-9.089-9.087-9.089-23.823 0-32.912 9.087-9.089 23.824-9.089 32.912 0l16.514 16.513L256 340.421V201.697H100.849c-12.853 0-23.273 10.42-23.273 23.273v263.758c0 12.852 10.42 23.272 23.272 23.272z"
        }
        fill={"#ee8700"}
      ></path>

      <path
        d={
          "M124.121 131.879v69.818h46.545v-69.818c0-47.053 38.281-85.333 85.333-85.333V0c-72.717 0-131.878 59.161-131.878 131.879z"
        }
        fill={"#a9a8ae"}
      ></path>
    </svg>
  );
}

export default LockCorrectSvgrepoComsvgIcon;
/* prettier-ignore-end */
