import { Injectable } from '@angular/core'
import { CdResultModel } from '@cd-core/models/cd-result.model'
import { Observable, of } from 'rxjs'
import { CdResultOverviewModel } from '@cd-core/models/cd-result-overview.model'
import { AppOptionModel } from '@shared/models/app-assets.model'

@Injectable({
  providedIn: 'root'
})
export class CdCoreService {

  private _bucketForm: FormData
  private _useCase: CdResultOverviewModel
  private _resultData: CdResultModel[]
  private _tableColumns: AppOptionModel[]
  public bIsDataAvailable: boolean


  constructor() {
    this._bucketForm = null
    this._useCase = null
    this._resultData = null
    this.bIsDataAvailable = false
  }

  setBucketForm(_: FormData): void {
    this._bucketForm = null
    this._bucketForm = { ..._ }
  }

  getBucketForm(): Observable<FormData> {
    return of(this._bucketForm)
  }

  setUseCase(_: CdResultOverviewModel): void {
    this._useCase = null
    this._useCase = { ..._ }
  }

  getUseCase(): Observable<CdResultOverviewModel> {
    return of(this._useCase)
  }

  setResultData(_: CdResultModel[]): void {
    this._resultData = null
    this._resultData = [..._]
  }

  getResultData(): Observable<CdResultModel[]> {
    return of(this._resultData)
  }

  setTableColumns(_: CdResultOverviewModel): void {
    this._tableColumns = []
    this._tableColumns = [
      { value: 'title', viewValue: 'Title' },
      { value: 'vid_id', viewValue: 'Video ID' },
      { value: 'format', viewValue: 'Format' },
      { value: 'bit_rate', viewValue: 'Bit Rate' },
      { value: 'sample_rate', viewValue: 'Sample Rate' },
      { value: 'video_url', viewValue: 'Video URL' },
      { value: 'video_type', viewValue: 'Video Type' }
    ]
    switch (_.algorithm.value) {
      case 'audio':
        this._tableColumns = [
          ...this._tableColumns,
          { value: 'track', viewValue: 'Track' },
          { value: 'encoding_format', viewValue: 'Encoding Format' },
          { value: 'diff_type', viewValue: 'Difference Type' },
          { value: 'diff_Duration', viewValue: 'Difference Duration' }
        ]
        break
      case 'language':
        this._tableColumns = [
          ...this._tableColumns,
          { value: 'track', viewValue: 'Track' },
          { value: 'duration', viewValue: 'Duration' },
          { value: 'channel', viewValue: 'Channel' },
          { value: 'language', viewValue: 'Language' }
        ]
        break
      case 'textual':
        this._tableColumns = [
          ...this._tableColumns,
          { value: 'encoding_format', viewValue: 'Encoding Format' },
          { value: 'duration', viewValue: 'Duration' },
          { value: 'caption_type', viewValue: 'Caption Type' },
          { value: 'caption_text', viewValue: 'Caption Text' }
        ]
        break
      case 'equipment':
        this._tableColumns = [
          ...this._tableColumns,
          { value: 'encoding_format', viewValue: 'Encoding Format' },
          { value: 'duration', viewValue: 'Duration' },
          { value: 'equipment_type', viewValue: 'Equipment Type' },
          { value: 'timecode_format', viewValue: 'Timecode Format' }
        ]
        break
      case 'framerates':
        this._tableColumns = [
          ...this._tableColumns,
          { value: 'encoding_format', viewValue: 'Encoding Format' },
          { value: 'duration', viewValue: 'Duration' },
          { value: 'resolution', viewValue: 'Resolution' },
          { value: 'vid_compression_rate', viewValue: 'Video Compression Rate' }
        ]
        break
      case 'timecode':
        this._tableColumns = [
          ...this._tableColumns,
          { value: 'encoding_format', viewValue: 'Encoding Format' },
          { value: 'duration', viewValue: 'Duration' },
          { value: 'timecode_format', viewValue: 'Timecode Format' },
          { value: 'frame_rate', viewValue: 'Frame Rate' }

        ]
        break
      case 'audioSegment':
        this._tableColumns = [
          ...this._tableColumns,
          { value: 'track', viewValue: 'Track' },
          { value: 'encoding_format', viewValue: 'Encoding Format' },
          { value: 'duration', viewValue: 'Duration' }
        ]
        break
      default:
        this._tableColumns = [...this._tableColumns]
        break
    }
  }

  getTableColumns(): Observable<AppOptionModel[]> {
    return of(this._tableColumns)
  }

}
