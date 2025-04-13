declare module "*.mp4" {
  const src: string;
  export default src;
}
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}
