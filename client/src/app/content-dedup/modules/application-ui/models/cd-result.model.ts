import { AppButton2Model, AppOptionModel } from '@shared/models/app-assets.model'

interface CdResultBaseModel {
  vid_id: string
  title: string
  video_url: string
  video_type: string
}

interface CdResult2BaseModel {
  vid_id: string
  title: string
  first_video_url: string
  second_video_url: string
  video_type: string
}

interface CdResultBaseExtendedModel extends CdResultBaseModel {
  format: string
  bit_rate: string | number
  sample_rate: string | number
}

export interface CdResultHashtagModel extends CdResultBaseModel {
  hashvalue: string
  similarity_percent: number
}

export interface CdResultAudioModel extends CdResultBaseExtendedModel {
  track: string
  encoding_format: string
  diff_type: string
  diff_Duration: string | number
  timecode_location: string | string[] | number[]
}

export interface CdResultLanguageModel extends CdResultBaseExtendedModel {
  track: string
  channel: string
  language: string
  // language_2: string
  duration: string | number
}

export interface CdResultTextualModel extends CdResultBaseExtendedModel {
  caption_type: string
  encoding_format: string
  caption_text: string
  // caption_text_2: string
  duration: string | number
}

export interface CdResultEquipmentModel extends CdResultBaseExtendedModel {
  equipment_type: string | number | null
  encoding_format: string
  timecode_format: string
  duration: string | number
}

export interface CdResultFrameRateModel extends CdResultBaseExtendedModel {
  resolution: string | string[] | number[]
  encoding_format: string
  vid_compression_rate: string
  duration: string | number
}

export interface CdResultTimeCodeModel extends CdResultBaseExtendedModel {
  timecode_format: string
  encoding_format: string
  frame_rate: string | string
  duration: string | number
}

export interface CdResultAudioSegmentModel extends CdResultBaseExtendedModel {
  track: string
  encoding_format: string
  timecode_location: string | string[] | number[]
  duration: string | number
}

export interface CdAnalysisModel extends AppOptionModel {
  count: number
}

export interface CdSummaryModel {
  client_details: string
  bucket_location: string
  sample_size: number
  total_size: string
  unique_videos: number
  total_analysis_time: string
  duplicates_found: number
  total_size_of_duplicates: string
  proposed_space_savings: string
}

export type CdResultOverviewModel = {
  useCase: CdAnalysisModel,
  summary: CdSummaryModel
}

export type CdResultOverviewListModel = {
  summary: CdSummaryModel
  analysis: CdAnalysisModel[]
}

export interface CdNextButtonModel {
  buttons: {
    next: AppButton2Model,
    launch: AppButton2Model,
    cloud: AppButton2Model,
    playCircle: AppButton2Model,
    here: AppButton2Model,
    pauseCircle: AppButton2Model,
    close: AppButton2Model,
    chevronLeft: AppButton2Model
  }
}

export type CdResultModel =
  | CdResultHashtagModel
  | CdResultAudioModel
  | CdResultLanguageModel
  | CdResultTextualModel
  | CdResultEquipmentModel
  | CdResultFrameRateModel
  | CdResultTimeCodeModel
  | CdResultAudioSegmentModel

export type CdResult2Model =
  | CdResultHashtagModel
  | CdResultAudioModel
  | CdResultLanguageModel
  | CdResultTextualModel
  | CdResultEquipmentModel
  | CdResultFrameRateModel
  | CdResultTimeCodeModel
  | CdResultAudioSegmentModel
