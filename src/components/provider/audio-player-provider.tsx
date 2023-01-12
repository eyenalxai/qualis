import { createSignal, JSX } from "solid-js"
import {
  AudioPlayerContext,
  AudioPlayerContextProps
} from "@utils/audio-player-context"
import { createAudio } from "@solid-primitives/audio"

type AuthContextProviderProps = {
  children: JSX.Element
}

export const AudioPlayerProvider = (props: AuthContextProviderProps) => {
  const [audioUrl, setAudioUrl] = createSignal(undefined as string | undefined)
  const [playing, setPlaying] = createSignal(false)

  createAudio(audioUrl, playing)

  const authContextValue: AudioPlayerContextProps = {
    playing,
    setPlaying,
    audioUrl,
    setAudioUrl
  }

  return (
    <AudioPlayerContext.Provider value={authContextValue}>
      {props.children}
    </AudioPlayerContext.Provider>
  )
}
