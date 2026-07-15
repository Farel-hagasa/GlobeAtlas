export interface Country {
  code: string;
  name: string;
  native: string;
  capital: string;
  emoji: string;
  currency: string;
  phone: string;
  continent: {
    code: string;
    name: string;
  };
  languages: {
    code: string;
    name: string;
  }[];
}