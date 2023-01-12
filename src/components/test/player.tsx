import { useAudioPlayer } from "@utils/audio-player-context"
import { Show } from "solid-js"
import { TestAudio } from "@utils/use-audio"
import { Button } from "@components/button"
import clsx from "clsx"

type PlayerProps = {
  testAudio: TestAudio
}

export const Player = (props: PlayerProps) => {
  const { audioUrl, setAudioUrl, playing, setPlaying } = useAudioPlayer()

  return (
    <Show
      when={playing() && props.testAudio.url === audioUrl()}
      keyed={false}
      fallback={
        <Button
          class={clsx("w-20")}
          onClick={() => {
            setAudioUrl(props.testAudio.url)
            setPlaying(true)
          }}
        >
          Play
        </Button>
      }
    >
      <Button class={clsx("w-20")} onClick={() => setPlaying(false)}>
        Pause
      </Button>
    </Show>
  )
}
