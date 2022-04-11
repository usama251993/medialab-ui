export interface CdTHEOplayerSourceModel {
  src: string
  type: string
}

export interface CdTHEOplayerConfigModel {
  libraryLocation?: string // https://cdn.myth.theoplayer.com/d9e455e0-8285-4e91-9f57-e22788dda8d8
  ui: {
    height: string
    width: string
  }
}
