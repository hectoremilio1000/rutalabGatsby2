/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPaciente = /* GraphQL */ `
  query GetPaciente($id: ID!) {
    getPaciente(id: $id) {
      id
      name
      direccion
      email
      telefono
      createdAt
      updatedAt
    }
  }
`;
export const listPacientes = /* GraphQL */ `
  query ListPacientes(
    $filter: ModelPacienteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPacientes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        direccion
        email
        telefono
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
