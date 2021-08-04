import * as React from "react";
import {
  PlasmicSwitchTokenomics,
  DefaultSwitchTokenomicsProps
} from "./plasmic/liretest/PlasmicSwitchTokenomics";
import { SwitchRef } from "@plasmicapp/react-web";

interface SwitchTokenomicsProps extends DefaultSwitchTokenomicsProps {}

function SwitchTokenomics_(props: SwitchTokenomicsProps, ref: SwitchRef) {
  const { plasmicProps, state } =
    PlasmicSwitchTokenomics.useBehavior<SwitchTokenomicsProps>(props, ref);
  return <PlasmicSwitchTokenomics {...plasmicProps} />;
}

const SwitchTokenomics = React.forwardRef(SwitchTokenomics_);

export default Object.assign(SwitchTokenomics, {
  __plumeType: "switch"
});
