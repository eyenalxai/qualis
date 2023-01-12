import { Player } from "@components/test/player"
import { AudioQuality, TestAudio } from "@utils/use-audio"
import { Accessor, createEffect, createSignal, For, Setter } from "solid-js"
import clsx from "clsx"
import { Select } from "@components/select"

type QualitySelectProps = {
  testAudio: TestAudio
  qualities: AudioQuality[]
  showResult: boolean
  setSelectedCount: Setter<number>
}

const calculateSelectStyle = (
  showResult: boolean,
  selectedQuality: Accessor<AudioQuality | undefined>,
  quality: AudioQuality
): string => {
  const bgColor = showResult
    ? selectedQuality() === quality
      ? "bg-color-style-right"
      : "bg-color-style-wrong"
    : "bg-color-style"

  const textColor = showResult
    ? selectedQuality() === quality
      ? "text-color-style-right"
      : "text-color-style-wrong"
    : "text-color-style"

  return clsx(bgColor, textColor)
}

export const QualitySelect = (props: QualitySelectProps) => {
  const [selectedQuality, setSelectedQuality] = createSignal(
    undefined as AudioQuality | undefined
  )
  const [selected, setSelected] = createSignal(false)

  createEffect(() => {
    if (selectedQuality() && !selected()) {
      props.setSelectedCount((count) => count + 1)
      setSelected(true)
    }
  })

  return (
    <div class={clsx("flex", "flex-row", "gap-4", "justify-center")}>
      <Player testAudio={props.testAudio} />
      <Select
        class={clsx(
          "w-28",
          "text-center",
          "py-0.5",
          calculateSelectStyle(
            props.showResult,
            selectedQuality,
            props.testAudio.quality
          )
        )}
        id={`${props.testAudio.quality}`}
        value={selectedQuality()}
        onChange={(e) => setSelectedQuality(e.currentTarget.value as AudioQuality)}
      >
        <For each={props.qualities}>
          {(quality) => <option value={quality}>{quality}</option>}
        </For>
      </Select>
    </div>
  )
}
