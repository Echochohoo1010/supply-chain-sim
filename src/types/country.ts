export interface Country {
  countryCode: string;
  name: string;
  selected: boolean;
}

export interface CountryProperties {
  ISO_A2: string;
  ISO_A3: string;
  NAME: string;
  NAME_LONG: string;
  ABBREV: string;
  ADMIN: string;
  CONTINENT: string;
  REGION_UN: string;
  SUBREGION: string;
  POP_EST: number;
}

export interface SupplyChainFlow {
  sourceCountry: string;
  targetCountry: string;
  volume?: number;
  value?: number;
  type?: string;
}
