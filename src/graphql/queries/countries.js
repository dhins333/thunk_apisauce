import  gql  from 'graphql-tag';

export const getCountries = gql`
{
    countries{
      name,
      code
    }
}
`