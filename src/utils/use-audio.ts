export type AudioQuality = "lossless" | "320 kbps" | "128 kbps" | "64 kbps"

export type TestAudio = {
  quality: AudioQuality
  url: string
}

export type TestCase = {
  name: string
  testAudios: TestAudio[]
}

export const useAudio = () => {
  const qualities: AudioQuality[] = ["lossless", "320 kbps", "128 kbps", "64 kbps"]

  const endpoint = "https://quootxab.fra1.cdn.digitaloceanspaces.com/quizz"

  const angelOlsenFolder = `${endpoint}/angel_olsen`
  const angelOlsenPrefix = `${angelOlsenFolder}/angel_olsen_all_mirrors`

  const angelOlsen: TestCase = {
    name: "Angel Olsen — All Mirrors",
    testAudios: [
      {
        quality: "lossless",
        url: `${angelOlsenPrefix}_lossless.flac`
      },
      {
        quality: "320 kbps",
        url: `${angelOlsenPrefix}_mp3_320.mp3`
      },
      {
        quality: "128 kbps",
        url: `${angelOlsenPrefix}_mp3_128.mp3`
      },
      {
        quality: "64 kbps",
        url: `${angelOlsenPrefix}_mp3_64.mp3`
      }
    ]
  }

  const daughtersFolder = `${endpoint}/daughters`
  const daughtersPrefix = `${daughtersFolder}/daughters_less_sex`

  const daughters: TestCase = {
    name: "Daughters — Less Sex",
    testAudios: [
      {
        quality: "lossless",
        url: `${daughtersPrefix}_lossless.flac`
      },
      {
        quality: "320 kbps",
        url: `${daughtersPrefix}_mp3_320.mp3`
      },
      {
        quality: "128 kbps",
        url: `${daughtersPrefix}_mp3_128.mp3`
      },
      {
        quality: "64 kbps",
        url: `${daughtersPrefix}_mp3_64.mp3`
      }
    ]
  }

  return {
    qualities,
    angelOlsen,
    daughters
  } as const
}
