import type { VehicleType } from "@pages/VehicleList/types";
import type { ResultDataType } from "@services/types";

import type {
  setVehicleAction,
  setVehiclesCountAction,
  setVehiclesItemsAction,
  setVehiclesLoaderAction,
  setCurrentPageAction
} from './actions';

export interface State {
  count: number | undefined;
  items: ResultDataType[];
  loader: boolean;
  vehicle: VehicleType | null;
  currentPage: number | undefined
}

export type Action =
  | ReturnType<typeof setVehicleAction>
  | ReturnType<typeof setVehiclesCountAction>
  | ReturnType<typeof setVehiclesItemsAction>
  | ReturnType<typeof setVehiclesLoaderAction>
  | ReturnType<typeof setCurrentPageAction>;
