import { Accessor, Context, createContext, Setter, useContext } from "solid-js"

export type AudioPlayerContextProps = {
  playing: Accessor<boolean>
  setPlaying: Setter<boolean>
  audioUrl: Accessor<string | undefined>
  setAudioUrl: Setter<string | undefined>
}

export const AudioPlayerContext = createContext() as Context<AudioPlayerContextProps>

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const useAudioPlayer = () => useContext(AudioPlayerContext)!
