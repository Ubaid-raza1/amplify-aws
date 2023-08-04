// Import the necessary subscription function from AWS Amplify
import { graphqlOperation } from 'aws-amplify';

// Define the onCreateNote subscription
export const onCreateNoteSubscription = `
  subscription OnCreateNote {
    onCreateNote {
      id
      name
      description
    }
  }
`;

// Define the onUpdateNote subscription
export const onUpdateNoteSubscription = `
  subscription OnUpdateNote {
    onUpdateNote {
      id
      name
      description
    }
  }
`;

// Define the onDeleteNote subscription
export const onDeleteNoteSubscription = `
  subscription OnDeleteNote {
    onDeleteNote {
      id
      name
      description
    }
  }
`;
