/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPaciente = /* GraphQL */ `
  mutation CreatePaciente(
    $input: CreatePacienteInput!
    $condition: ModelpacienteConditionInput
  ) {
    createPaciente(input: $input, condition: $condition) {
      id
      nombre
      edad
      direccion
      email
      telefono
      createdAt
      updatedAt
    }
  }
`;
export const updatePaciente = /* GraphQL */ `
  mutation UpdatePaciente(
    $input: UpdatePacienteInput!
    $condition: ModelpacienteConditionInput
  ) {
    updatePaciente(input: $input, condition: $condition) {
      id
      nombre
      edad
      direccion
      email
      telefono
      createdAt
      updatedAt
    }
  }
`;
export const deletePaciente = /* GraphQL */ `
  mutation DeletePaciente(
    $input: DeletePacienteInput!
    $condition: ModelpacienteConditionInput
  ) {
    deletePaciente(input: $input, condition: $condition) {
      id
      nombre
      edad
      direccion
      email
      telefono
      createdAt
      updatedAt
    }
  }
`;
