import clsx from "clsx"
import { JSX } from "solid-js"

type SelectProps = JSX.InputHTMLAttributes<HTMLSelectElement> & {
  id: string
}
export const Select = (props: SelectProps) => {
  return (
    <div class={clsx("flex", "flex-col", "gap-0.5")}>
      <select
        value={props.value}
        id={props.id}
        name={props.id}
        autocomplete="on"
        class={clsx(
          "appearance-none",
          "transition-style",
          "ring-style",
          "rounded-md",
          "px-2",
          props.class
        )}
        onChange={(e) =>
          props.onChange && typeof props.onChange === "function" && props.onChange(e)
        }
      >
        {props.children}
      </select>
    </div>
  )
}
