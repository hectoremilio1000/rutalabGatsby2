/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPaciente = /* GraphQL */ `
  mutation CreatePaciente(
    $input: CreatePacienteInput!
    $condition: ModelPacienteConditionInput
  ) {
    createPaciente(input: $input, condition: $condition) {
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
export const updatePaciente = /* GraphQL */ `
  mutation UpdatePaciente(
    $input: UpdatePacienteInput!
    $condition: ModelPacienteConditionInput
  ) {
    updatePaciente(input: $input, condition: $condition) {
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
export const deletePaciente = /* GraphQL */ `
  mutation DeletePaciente(
    $input: DeletePacienteInput!
    $condition: ModelPacienteConditionInput
  ) {
    deletePaciente(input: $input, condition: $condition) {
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
