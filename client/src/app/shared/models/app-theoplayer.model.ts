export interface AppTHEOplayerSourceModel {
  src: string
  type: string
}

export interface AppTHEOplayerConfigModel {
  libraryLocation?: string // https://cdn.myth.theoplayer.com/d9e455e0-8285-4e91-9f57-e22788dda8d8
  ui: {
    height: string
    width: string
  }
}

export interface AppTHEOplayerVideoModel extends AppTHEOplayerSourceModel {
  timecodeLocation?: {
    start: number
    end: number
  }[]
  duration?: number
  title?: string
  description?: string
  poster?: string
  autoplay?: boolean
  fps?: number
}

export interface AppTHEOplayerModel {
  config: AppTHEOplayerConfigModel
  video: AppTHEOplayerVideoModel
}
