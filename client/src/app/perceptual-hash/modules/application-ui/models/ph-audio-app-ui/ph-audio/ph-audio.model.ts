import { INITIAL_PH_VIDEO, PhVideoModel } from '../../common/ph-video.model'
import { INITIAL_PH_COMPONENT_FLAG, PhComponentFlagModel } from '../../common/ph-util.model'

interface PhAudioComparisonVideoModel extends PhVideoModel {
  isAudioPresent: boolean
}

export interface PhAudioComparisonResultModel {
  tag: string | null
  inspectedVideo: PhAudioComparisonVideoModel
  referenceVideo: PhAudioComparisonVideoModel
}

export interface PhAudioComparisonOverviewModel {
  results: PhAudioComparisonResultModel[]
}

interface PhAudioComparisonDataPointModel {
  start: string | null
  end: string | null
  similarity: number | null
}

export interface PhAudioComparisonDataModel {
  inspectedVideo: PhAudioComparisonVideoModel
  referenceVideo: PhAudioComparisonVideoModel
  comparisons: PhAudioComparisonDataPointModel[]
  meanSimilarity: number | null
}

const INITIAL_AUDIO_COMPARISON_VIDEO: PhAudioComparisonVideoModel = {
  ...INITIAL_PH_VIDEO, isAudioPresent: false
}

export const INITIAL_AUDIO_COMPARISON_RESULT: PhAudioComparisonResultModel = {
  tag: null,
  inspectedVideo: { ...INITIAL_AUDIO_COMPARISON_VIDEO }, referenceVideo: { ...INITIAL_AUDIO_COMPARISON_VIDEO }
}

export const INITIAL_AUDIO_COMPARISON_OVERVIEW: PhAudioComparisonOverviewModel = {
  results: [{ ...INITIAL_AUDIO_COMPARISON_RESULT }]
}

const INITIAL_AUDIO_COMPARISON_DATA_POINT: PhAudioComparisonDataPointModel = {
  start: null, end: null, similarity: 0
}

export const INITIAL_AUDIO_COMPARISON_DATA: PhAudioComparisonDataModel = {
  inspectedVideo: { ...INITIAL_AUDIO_COMPARISON_VIDEO }, referenceVideo: { ...INITIAL_AUDIO_COMPARISON_VIDEO },
  comparisons: [{ ...INITIAL_AUDIO_COMPARISON_DATA_POINT }], meanSimilarity: 0
}

export interface PhAudioComponentFlagsModel {
  overview: PhComponentFlagModel
  result: PhComponentFlagModel
}

export const INITIAL_AUDIO_COMPONENT_FLAGS: PhAudioComponentFlagsModel = {
  overview: { ...INITIAL_PH_COMPONENT_FLAG }, result: { ...INITIAL_PH_COMPONENT_FLAG }
}
