import { PhVideoModel, INITIAL_PH_VIDEO } from '@ph-app/models/common/ph-video.model'

import { INITIAL_PH_COMPONENT_FLAG, PhComponentFlagModel } from '../../common/ph-util.model'

import { PhPhashBucketComponentFlagModel } from '../ph-phash-bucket/ph-phash-bucket.model'

interface PhPhashOverviewVideoModel extends PhVideoModel {
  index: number
  inspectedVideoIndex: number
}

export interface PhPhashOverviewComparisonModel {
  id: number
  inspectedVideoTitle: string | null
  referenceVideoTitle: string | null
  inspectedVideoIndex: number
  referenceVideoIndex: number
  meanHammingDistance: number
  similarityPercentage: number
  inference: string | null
}

export interface PhPhashOverviewModel {
  bucket: string | null
  videos: PhPhashOverviewVideoModel[]
  comparisons: PhPhashOverviewComparisonModel[]
}

export interface PhPhashOverviewComponentFlagModel {
  process: PhComponentFlagModel
}

const INITIAL_PHASH_OVERVIEW_VIDEO: PhPhashOverviewVideoModel = {
  ...INITIAL_PH_VIDEO, index: 0, inspectedVideoIndex: 0
}

export const INITIAL_PHASH_COMPARISON: PhPhashOverviewComparisonModel = {
  id: 0, inference: null, inspectedVideoIndex: 0, inspectedVideoTitle: null, referenceVideoIndex: 0, referenceVideoTitle: null, similarityPercentage: 0, meanHammingDistance: 0
}

export const INITIAL_PHASH_OVERVIEW_FLAGS: PhPhashBucketComponentFlagModel = {
  process: { ...INITIAL_PH_COMPONENT_FLAG }
}

export const INITIAL_PHASH_OVERVIEW: PhPhashOverviewModel = {
  bucket: null, comparisons: [{ ...INITIAL_PHASH_COMPARISON }], videos: [{ ...INITIAL_PHASH_OVERVIEW_VIDEO }]
}
