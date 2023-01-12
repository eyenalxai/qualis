import clsx from "clsx"
import { JSX } from "solid-js"

type IconProps = {
  children: JSX.Element
}

export const Icon = (props: IconProps) => {
  return <div class={clsx("w-4", "h-4", "scale-125")}>{props.children}</div>
}
