import clsx from "clsx"
import { JSX } from "solid-js"

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: () => void
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled}
      onClick={() => props.onClick()}
      type={props.type}
      class={clsx(
        "transition-style",
        "ring-style",
        "rounded-md",
        "bg-color-style",
        "text-color-style",
        "px-2",
        props.class
      )}
    >
      {props.children}
    </button>
  )
}
