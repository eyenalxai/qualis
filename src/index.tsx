/* @refresh reload */
import { render } from "solid-js/web"
import { App } from "./App"
import { AudioPlayerProvider } from "@components/provider/audio-player-provider"
import "./index.css"

render(
  () => (
    <AudioPlayerProvider>
      <App />
    </AudioPlayerProvider>
  ),
  document.getElementById("root") as HTMLElement
)
