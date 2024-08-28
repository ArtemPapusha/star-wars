import type { VehicleType } from "@pages/VehicleList/types";

import type {
  setVehicleAction,
  setVehiclesCountAction,
  setVehiclesItemsAction,
  setVehiclesLoaderAction,
  setCurrentPageAction
} from './actions';

export interface State {
  count: number | undefined;
  items: VehicleType[];
  loader: boolean;
  vehicle: Omit<VehicleType, 'url' | 'created' | 'edited'>;
  currentPage: number | undefined
}

export type Action =
  | ReturnType<typeof setVehicleAction>
  | ReturnType<typeof setVehiclesCountAction>
  | ReturnType<typeof setVehiclesItemsAction>
  | ReturnType<typeof setVehiclesLoaderAction>
  | ReturnType<typeof setCurrentPageAction>;
