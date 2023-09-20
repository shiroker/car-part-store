export interface CoreState {
  allMenuItems: string[];

}

export function defaultCoreState(): CoreState {
  return {allMenuItems: []};
}
