import {NameSpace, RootReducerType} from '../root-reducer';
import {Camera} from '../../../types/camera';

export const getCameras = (state: RootReducerType): Camera[] => state[NameSpace.Cameras].cameras;
export const getActivePage = (state: RootReducerType): number => state[NameSpace.Cameras].activePage;
