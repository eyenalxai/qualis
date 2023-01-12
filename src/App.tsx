import { useAudio } from "@utils/use-audio"
import { For } from "solid-js"
import { TestCase } from "@components/test/test-case"
import clsx from "clsx"

export const App = () => {
  const { angelOlsen, daughters, qualities } = useAudio()

  const testCases = [angelOlsen, daughters]
  return (
    <div class={clsx("w-screen", "flex", "flex-col", "items-center", "pt-12", "gap-8")}>
      <For each={testCases}>
        {(testCase) => {
          return (
            <TestCase
              qualities={qualities}
              testAudios={testCase.testAudios}
              name={testCase.name}
            />
          )
        }}
      </For>
    </div>
  )
}
