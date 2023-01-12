import clsx from "clsx"
import { createEffect, createSignal, For } from "solid-js"
import { QualitySelect } from "@components/test/quality-select"
import { AudioQuality, TestAudio } from "@utils/use-audio"
import { shuffleArray } from "@utils/misc"

type TestCaseProps = {
  testAudios: TestAudio[]
  qualities: AudioQuality[]
  name: string
}

export const TestCase = (props: TestCaseProps) => {
  const [showResult, setShowResult] = createSignal(false)
  const [selectedCount, setSelectedCount] = createSignal(0)

  createEffect(() => {
    if (selectedCount() === props.testAudios.length) {
      setShowResult(true)
    }
  })

  return (
    <div
      class={clsx(
        "w-64",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "gap-4"
      )}
    >
      <span class={clsx("text-color-style")}>{props.name}</span>
      <div class={clsx("flex", "flex-col", "gap-2")}>
        <For each={shuffleArray(props.testAudios)}>
          {(testAudio) => (
            <QualitySelect
              testAudio={testAudio}
              qualities={props.qualities}
              showResult={showResult()}
              setSelectedCount={setSelectedCount}
            />
          )}
        </For>
      </div>
    </div>
  )
}
