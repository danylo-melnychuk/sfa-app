export interface ILeague {
  league: {
    id: number;
    name: string;
    logo: string;
    country: {
      id: number;
      name: string;
      code: string;
      flag: string;
    };
  };
}
