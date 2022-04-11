interface CdResultBaseModel {
  vid_id: string
  title: string
  format: string
  bit_rate: string | number
  sample_rate: string | number
  video_url: string
  video_type: string
}

export interface CdResultAudioModel extends CdResultBaseModel {
  track: string
  encoding_format: string
  diff_type: string
  diff_Duration: string | number
}

export interface CdResultLanguageModel extends CdResultBaseModel {
  track: string
  channel: string
  language: string
  duration: string | number
}

export interface CdResultTextualModel extends CdResultBaseModel {
  caption_type: string
  encoding_format: string
  caption_text: string
  duration: string | number
}

export interface CdResultEquipmentModel extends CdResultBaseModel {
  equipment_type: string | number
  encoding_format: string
  timecode_format: string
  duration: string | number
}

export interface CdResultFrameRateModel extends CdResultBaseModel {
  resolution: string | string[] | number[]
  encoding_format: string
  vid_compression_rate: string
  duration: string | number
}

export interface CdResultTimeCodeModel extends CdResultBaseModel {
  timecode_format: string
  encoding_format: string
  frame_rate: string | string
  duration: string | number
}

export interface CdResultAudioSegmentModel extends CdResultBaseModel {
  track: string
  encoding_format: string
  timecode_location: string | string[] | number[]
  duration: string | number
}

interface CdRatioModel {
  id: string | number
  hashtag: string | number
  audioData: string | number
  languageTrack: string | number
  textualCaption: string | number
  equipment: string | number
  frameRate: string | number
  timeCode: string | number
  audioSegment: string | number
}

export type CdResultModel =
  | CdResultAudioModel
  | CdResultLanguageModel
  | CdResultTextualModel
  | CdResultEquipmentModel
  | CdResultFrameRateModel
  | CdResultTimeCodeModel
  | CdResultAudioSegmentModel

