// Import the necessary query function from AWS Amplify
import { graphqlOperation } from 'aws-amplify';

// Define the listNotes query
export const listNotesQuery = `
  query ListNotes {
    listNotes {
      items {
        id
        name
        description
      }
    }
  }
`;

// Define the getNote query
export const getNoteQuery = `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
    }
  }
`;
