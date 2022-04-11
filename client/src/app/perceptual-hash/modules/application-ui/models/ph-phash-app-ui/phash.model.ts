import { AppButton2Model, AppOptionModel } from '@shared/models/app-assets.model'
import { PhVideoModel } from '@ph-app/models/common/ph-video.model'

export type BarChartData = {
  fileName: string
  total_duration: number
  video_url: string
  duration_of_color: {
    start: number
    end: number
  }[]
}

export type BlackFrameData = {
  fileName: string
  total_duration: number
  video_url: string
  duration_of_black_frame: {
    start: number
    end: number
  }[]
}

export type SceneDetectionData = {
  fileName: string
  total_duration: number
  duration_of_scenes_between_fades: number
  duration_of_scenes_between_black_frames: number,
  timecode_of_scenes_between_black_frames: {
    start: number
    end: number
  }[]
  timecode_of_scenes_between_fades: {
    start: number
    end: number
  }[]
}

export type CountDownData = {
  fileName: string
  total_duration: number
  time_code_location: {
    start: number
    end: number
  }[]
}

export interface PhQuickLinkModel {
  inspectedVideo: string
  referenceVideo: string
  index: number
}

export interface PhGraphModel extends AppOptionModel {
  description: string[]
}

interface PhComparisonVideoModel extends PhVideoModel {
  inspectedVideoIndex: number
}

export interface PhComparisonDataPointModel {
  index: number
  inspectedVideo: PhComparisonVideoModel
  referenceVideo: PhComparisonVideoModel
  similarityPercentage: number
  hammingDistances: number[]
  timeCodes: {
    start: string
    end: string
  }[]
  meanHammingDistance: number
  inference: string
  radius: number
}

export interface PhCircularPackDataModel {
  tag: string
  data: PhComparisonDataPointModel | null
  children: PhCircularPackDataModel[]
}

// For Matrix Graph

interface PhMatrixVideoModel extends PhVideoModel {
  index: number
  inspectedVideoIndex: number
}

interface PhMatrixComparisonModel {
  inspectedVideoIndex: number
  referenceVideoIndex: number
  meanHammingDistance: number
  similarityPercentage: number
  inference: string
}

export interface PhMatrixDataModel {
  bucket: string
  videos: PhMatrixVideoModel[]
  comparisons: PhMatrixComparisonModel[]
}

export interface PhMatrixDataPointModel {
  index: number
  inspectedVideo: PhMatrixVideoModel
  referenceVideo: PhMatrixVideoModel
  similarityPercentage: number
  meanHammingDistance: number
  inference: string
}

// For Sankey Graph

export interface PhSankeyNodeModel {
  nodeData: {
    name: string
    timeCode: {
      start: string
      end: string
      duration: number
    }
  }
}

export interface PhSankeyLinkModel {
  source: string
  target: string
  value: number
}

interface PhSankeySceneModel {
  index: number
  sceneID: string
  start: string
  end: string
  duration: number
}

interface PhSankeyVideoModel extends PhVideoModel {
  scenes: PhSankeySceneModel[]
}

export interface PhSankeyDataModel {
  bucket: string
  inspectedVideo: PhSankeyVideoModel
  referenceVideo: PhSankeyVideoModel
  similarityPercentage: number
  meanHammingDistance: number
}

export interface PhSankeyDataPointModel {
  nodes: PhSankeyNodeModel[]
  links: PhSankeyLinkModel[]
}

// For Scene Bar Graph

interface PhSceneBarSceneModel {
  index: number
  sceneID: string
  start: string
  end: string
  duration: number
}

interface PhSceneBarVideoModel extends PhVideoModel {
  scenes: PhSceneBarSceneModel[]
}

export interface PhSceneBarDataModel {
  bucket: string
  inspectedVideo: PhSceneBarVideoModel
  referenceVideo: PhSceneBarVideoModel
  similarityPercentage: number
  meanHammingDistance: number
}

export interface PhAssetsModel {
  buttons: {
    viewDetails?: AppButton2Model
    details?: AppButton2Model
    back?: AppButton2Model
  }
}

export interface PhHomeAssetsModel {
  buttons: AppButton2Model
}
