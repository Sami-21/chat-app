import {
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useEffect, useState } from "react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { useAppSelector } from "../store/hooks";
import axios from "axios";
import { Container } from "@mui/system";

const Chat: React.FC = () => {
  const auth = useAppSelector((state) => state);
  const { user, token } = auth;
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<any[]>([]);
  const [rooms, setRooms] = useState<any[]>([]);
  const [currentRoom, setCurrentRoom] = useState<any>("");

  const sendMessage = async () => {
    console.log("====================================");
    console.log(currentRoom);
    console.log("====================================");
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/chat-room/" + currentRoom.id,
        {
          message: message,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage("");
      getMessages();
    } catch (error) {
      console.log("====================================");
      console.log(error.response);
      console.log("====================================");
    }
  };

  const getMessages = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/chat-room/${+currentRoom.id}/messages`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessages(data);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  const getRooms = async () => {
    try {
      const { data } = await axios.get("http://127.0.0.1:8000/api/chat-rooms", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRooms(data);
      setCurrentRoom(data[0]);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  useEffect(() => {
    console.log(token);

    console.log("====================================");
    console.log(currentRoom);
    console.log("====================================");
    getRooms();

    return () => {
      setMessages([]);
      setRooms([]);
    };
  }, []);

  useEffect(() => {
    const subscribeToChannel = () => {
      // Pusher + Echo
      window.Pusher = Pusher;
      window.Echo = new Echo({
        broadcaster: "pusher",
        key: "e1c84bf5f53da1765e96",
        cluster: "eu",
        forceTLS: true,
        wsHost: window.location.host,
        wsPort: 8000,
        authEndpoint: "http://localhost:8000/broadcasting/auth",
        encrypted: true,
        auth: {
          headers: {
            Authorization: "Bearer " + token,
          },
        },
      });
      const channel = window.Echo.private("chat." + currentRoom.id);
      channel.listen("NewChatMessage", () => {
        getMessages();
      });
    };
    subscribeToChannel();
    getMessages();
    return () => {
      window.Echo.leave("chat." + currentRoom.id);
    };
  }, [currentRoom]);

  return (
    <>
      <Container>
        <Select
          label="room"
          value={currentRoom}
          onChange={(e) => {
            setCurrentRoom(e.target.value);
          }}
        >
          {rooms.map((room, index) => (
            <MenuItem key={index} value={room}>
              {room.name}
            </MenuItem>
          ))}
        </Select>
        <Card sx={{ maxWidth: 400, height: "fit-content" }}>
          <CardContent className="messages-container">
            {messages.map((message, index) => (
              <Chip
                className="message"
                style={{
                  marginLeft: message.user_id !== user.id ? "unset" : "auto",
                }}
                key={index}
                label={message.chat_message}
                color={message.user_id == user.id ? "primary" : "default"}
              />
            ))}
          </CardContent>
          <CardActions>
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <IconButton onClick={sendMessage} disabled={message.length == 0}>
              <SendIcon color="primary" />
            </IconButton>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

export default Chat;
