import  gql  from 'graphql-tag';


export const getCountryDetails = gql`
query getCountryDetails($code:ID!){
        country(code:$code){
            name
            native
            phone
            capital
      }
    }
`