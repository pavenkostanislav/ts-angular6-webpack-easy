import { IMap } from "./map.interface";

export interface IGroup<T = string | number> extends IMap<T[]> { }