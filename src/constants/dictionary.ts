import {CameraCategory} from '../types/camera-category';
import {CameraType} from '../types/camera-type';

export const DICTIONARY: { [index: string]: string } = {
  [CameraCategory.Videocamera]: 'видеокамера',
  [CameraCategory.Photocamera]: 'фотокамара',
  [CameraType.Instant]: 'Моментальная',
  [CameraType.Film]: 'Плёночная',
  [CameraType.Collection]: 'Коллекционная',
  [CameraType.Digital]: 'Цифровая',
};
