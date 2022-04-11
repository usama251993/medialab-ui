import { PhVideoModel, INITIAL_PH_VIDEO } from '../../common/ph-video.model'

export interface PhMatrixVideoModel extends PhVideoModel {
  index: number
  inspectedVideoIndex: number
}

export interface PhMatrixComparisonModel {
  inspectedVideoIndex: number
  referenceVideoIndex: number
  meanHammingDistance: number
  similarityPercentage: number
  inference: string | null
}

export interface PhMatrixDataModel {
  bucket: string | null
  videos: PhMatrixVideoModel[]
  comparisons: PhMatrixComparisonModel[]
}

export interface PhMatrixDataPointModel {
  index: number
  inspectedVideo: PhMatrixVideoModel
  referenceVideo: PhMatrixVideoModel
  similarityPercentage: number
  meanHammingDistance: number
  inference: string | null
}

export const INITIAL_PH_MATRIX_VIDEO: PhMatrixVideoModel = {
  ...INITIAL_PH_VIDEO, index: 0, inspectedVideoIndex: 0
}

export const INITIAL_PH_MATRIX_COMPARISON: PhMatrixComparisonModel = {
  inspectedVideoIndex: 0, referenceVideoIndex: 0, meanHammingDistance: 0, similarityPercentage: 0, inference: null
}

export const INITIAL_PH_MATRIX_DATA: PhMatrixDataModel = {
  bucket: null, comparisons: [{ ...INITIAL_PH_MATRIX_COMPARISON }], videos: [{ ...INITIAL_PH_MATRIX_VIDEO }]
}

export const INITIAL_PH_MATRIX_DATAPOINT: PhMatrixDataPointModel = {
  index: 0, inspectedVideo: { ...INITIAL_PH_MATRIX_VIDEO }, referenceVideo: { ...INITIAL_PH_MATRIX_VIDEO }, similarityPercentage: 0, meanHammingDistance: 0, inference: null
}
