// Import the necessary mutation function from AWS Amplify
import { graphqlOperation } from 'aws-amplify';

// Define the createNote mutation
export const createNoteMutation = `
  mutation CreateNote($input: CreateNoteInput!) {
    createNote(input: $input) {
      id
      name
      description
    }
  }
`;

// Define the updateNote mutation
export const updateNoteMutation = `
  mutation UpdateNote($input: UpdateNoteInput!) {
    updateNote(input: $input) {
      id
      name
      description
    }
  }
`;

// Define the deleteNote mutation
export const deleteNoteMutation = `
  mutation DeleteNote($input: DeleteNoteInput!) {
    deleteNote(input: $input) {
      id
      name
      description
    }
  }
`;
