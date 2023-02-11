import {
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useEffect, useState } from "react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

interface message {
  user: string;
  message: string;
}

const Chat: React.FC = () => {
  // Public Channel
  useEffect(() => {
    // Pusher
    const pusher = new Pusher("e1c84bf5f53da1765e96", {
      cluster: "eu",
      forceTLS: true,
    });
    const channel = pusher.subscribe("chat");
    channel.bind("pusher:subscription_succeeded", () => {
      console.log("connected");
    });
    channel.bind("message", (data: any) => {
      console.log(data);
    });

    // Pusher + Echo
    // window.Pusher = Pusher;
    // window.Echo = new Echo({
    //   broadcaster: "pusher",
    //   key: "e1c84bf5f53da1765e96",
    //   cluster: "eu",
    //   forceTLS: true,
    //   wsHost: window.location.host,
    //   wsPort: 8000,
    // });
    // const channel = window.Echo.channel("chat");
    // channel.listen("pusher:subscription_succeeded", () => {
    //   console.log("connected");

    //   channel.whisper("client-message", {
    //     your: "data",
    //   });
    // });
    // window.Echo.channel("chat").listen("client-message", (data: any) => {
    //   console.log("event heared");
    //   console.log(data);
    // });
    return () => {};
  }, []);

  const [user, setUser] = useState<string>("sami");
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<any[]>([]);

  const sendMessage = (): void => {
    setMessage("");
  };

  return (
    <>
      {/* <Card sx={{ maxWidth: 450, height: "fit-content" }}>
        <CardActions>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />
        </CardActions>

        <CardContent className="messages-container">
          {messages.map((message, index) => (
            <Chip
              className="message"
              style={{
                marginLeft: message.user !== user ? "unset" : "auto",
              }}
              key={index}
              label={message.message}
              color={message.user == user ? "primary" : "default"}
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
          <IconButton onClick={sendMessage}>
            <SendIcon color="primary" />
          </IconButton>
        </CardActions>
      </Card> */}
    </>
  );
};

export default Chat;
