// Central registry of all sector data
import { energyData } from "./energy";
import { healthcareData } from "./healthcare";
import { roboticsData } from "./robotics";
import type { SectorData } from "./energy";

export const sectorRegistry: Record<string, SectorData> = {
  energy: energyData,
  healthcare: healthcareData,
  robotics: roboticsData,
};

export function getSectorData(sector: string): SectorData | null {
  return sectorRegistry[sector] ?? null;
}

export const availableSectors = Object.keys(sectorRegistry);

export type { SectorData };
