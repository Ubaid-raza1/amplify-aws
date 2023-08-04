import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
  Flex,
  TextField,
  Text,
} from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listNotesQuery } from "./graphql/queries";
import { createNoteMutation, deleteNoteMutation } from "./graphql/mutations";

const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const { data } = await API.graphql({ query: listNotesQuery });
      if (data !== undefined) {
        setNotes(data.listNotes.items);
        // console.log(data.listNotes.items);
      }
    } catch (error) {
      console.log(error);
    }
    // console.log()
  };

  const createNotes = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = {
      name: form.get("name"),
      description: form.get("description"),
    };
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    e.target.reset();
  };

  const deleteNotes = async ({ id }) => {
    const newNotes = notes.filter((ele) => ele?.id !== id);
    setNotes(newNotes);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  };

  return (
    <View className="App">
      <Heading level={1}>My Notes app</Heading>
      <View as="form" margin="3rem 0" onSubmit={createNotes}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Notes Name"
            label="Notes Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Notes Description"
            label="Notes Description"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Notes
          </Button>
        </Flex>
      </View>
      <View margin="3rem 0">
        {notes?.map((item) => (
          <Flex
            key={item.id || item.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {item.name}
            </Text>
            <Text as="span">{item.description}</Text>
            <Button onClick={() => deleteNotes(item)}>Delete Notes</Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);
