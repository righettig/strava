export interface IRace {
  name: string;
  created: string;
  url: string;
  logo_url: string;
}

export interface IResolvedRaces {
  races: IRace[];
  error?: any;
}