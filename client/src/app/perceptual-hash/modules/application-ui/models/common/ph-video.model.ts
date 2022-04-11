export interface PhVideoModel {
  title: string | null
  extension: string | null
  url: string | null
  duration: string | null
  fps: number | null
  type: string | null
}

export const INITIAL_PH_VIDEO: PhVideoModel = {
  title: null, extension: null, url: null, duration: null, fps: 0, type: null
}
