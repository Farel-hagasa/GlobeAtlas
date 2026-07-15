import { GraphQLClient, gql } from "graphql-request";
import { Country } from "@/types/country";

const client = new GraphQLClient("https://countries.trevorblades.com/");

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      native
      capital
      emoji
      currency
      phone
      continent {
        code
        name
      }
      languages {
        code
        name
      }
    }
  }
`;

const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      native
      capital
      emoji
      currency
      phone
      continent {
        code
        name
      }
      languages {
        code
        name
      }
    }
  }
`;

export async function getAllCountries(): Promise<Country[]> {
  const data = await client.request<{
    countries: Country[];
  }>(GET_COUNTRIES);

  return data.countries;
}

export async function getCountryByCode(
  code: string
): Promise<Country | null> {
  const data = await client.request<{
    country: Country | null;
  }>(GET_COUNTRY, {
    code,
  });

  return data.country;
}