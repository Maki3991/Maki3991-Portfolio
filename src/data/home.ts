import { readJson } from "@/data/content";

export type LiveIndexItem = {
  label: string;
  value: string;
};

export type WorkbenchItem = {
  order: number;
  title: string;
  type: string;
  status: string;
  why: string;
  visible?: boolean;
};

export type HomeSelection = {
  archiveId: string;
};

export const homeLiveIndex = readJson<LiveIndexItem[]>("settings/home-live-index.json");
export const homeWorkbench = readJson<WorkbenchItem[]>("settings/home-workbench.json").filter(
  (item) => item.visible !== false,
);
export const homeSelection = readJson<HomeSelection>("settings/home-selection.json");
