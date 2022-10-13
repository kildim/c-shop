import {NameSpace, RootReducerType} from '../root-reducer';
import {Camera} from '../../../types/camera';

export const getCameras = (state: RootReducerType): Camera[] => state[NameSpace.Cameras].cameras;
