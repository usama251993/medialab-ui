import { PhVideoModel } from '../../common/ph-video.model'

interface PhPhashResultSceneModel {
  sceneID: string | null
  start: string | null
  end: string | null
  duration: number
}

interface PhPhashResultVideoModel extends PhVideoModel {
  scenes: PhPhashResultSceneModel[]
}

export interface PhPhashResultModel {
  inspectedVideo: PhPhashResultVideoModel
  referenceVideo: PhPhashResultVideoModel
  hammingDistances: number[]
  meanHammingDistance: number
  similarityPercentage: number
  inference: string | null
}

const INITIAL_PHASH_RESULT_SCENE: PhPhashResultSceneModel = {
  duration: 0, end: null, sceneID: null, start: null
}

const INITIAL_PHASH_RESULT_VIDEO: PhPhashResultVideoModel = {
  duration: null, extension: null, fps: 0, scenes: [{ ...INITIAL_PHASH_RESULT_SCENE }], title: null, type: null, url: null
}

export const INITIAL_PHASH_RESULT: PhPhashResultModel = {
  inspectedVideo: { ...INITIAL_PHASH_RESULT_VIDEO },
  referenceVideo: { ...INITIAL_PHASH_RESULT_VIDEO },
  hammingDistances: [], inference: null, meanHammingDistance: 0, similarityPercentage: 0
}
