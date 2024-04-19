import React, { useState, useEffect } from "react";
import styles from "./vAssistant.module.css";
import {
  AiOutlineClose,
  AiOutlineSend,
  AiFillSmile,
  AiOutlineAudio,
  AiOutlineAudioMuted,
  AiOutlineSound,
  AiOutlineNotification,
} from "react-icons/ai";
import Loading from "./loading";
import { ASSISTANT_ID, openai } from "../../config/firebaseConfig";

const VirtualAssistant = ({ content }) => {
  const [isWorking, setIsWorking] = useState(false);
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [listening, setListening] = useState(false);
  const [muted, setMuted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [synthesis, setSynthesis] = useState(null);

  useEffect(() => {
    const initializeRecognition = async () => {
      if (typeof window !== "undefined") {
        if (
          "SpeechRecognition" in window ||
          "webkitSpeechRecognition" in window
        ) {
          const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;
          const recognition = new SpeechRecognition();
          recognition.continuous = true;
          recognition.interimResults = true;
          recognition.lang = "en-US";
          try {
            await navigator.mediaDevices.getUserMedia({ audio: true });
          } catch (error) {
            console.error("Error accessing microphone:", error);
            return;
          }

          recognition.onresult = (event) => {
            const currentTranscript =
              event.results[event.results.length - 1][0].transcript;
            setQuestion(currentTranscript);
          };

          recognition.onend = () => {
            setListening(false);
          };

          setRecognition(recognition);
        } else {
          console.error("SpeechRecognition is not supported in this browser.");
        }
      }
    };

    initializeRecognition();
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setSynthesis(window.speechSynthesis);
    }
  }, []);

  useEffect(() => {
    if (synthesis && !muted && response) {
      synthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(response);
      synthesis.speak(utterance);
    }
  }, [synthesis, muted, response]);

  const handleToggle = () => {
    setIsWorking((prevState) => !prevState);
    setQuestion("");
    setResponse("");
    setListening(false);
    setMuted(false);
  };
  const delay = (milliseconds) => {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  };
  const handleSubmit = async () => {
    if (question.trim() === "") return;
    setLoading(true);
    content.userQuestion = question;
    try {
      const thread = await openai.beta.threads.create();
      const message = await openai.beta.threads.messages.create(thread.id, {
        role: "user",
        content: JSON.stringify(content),
      });
      let run = await openai.beta.threads.runs.createAndPoll(thread.id, {
        assistant_id: ASSISTANT_ID,
      });
      if (run.status === "completed") {
        const messages = await openai.beta.threads.messages.list(run.thread_id);
        for (const message of messages.data.reverse()) {
          setResponse(message.content[0].text.value);
        }
      }
    } catch (error) {
      setResponse("Oops! Something went wrong.");
      console.log(error);
    } finally {
      setQuestion("");
      setLoading(false);
      setListening(false);
    }
  };

  const handleStartStopListening = () => {
    if (recognition && !loading) {
      if (!listening) {
        synthesis.cancel();
        recognition.start();
      } else {
        recognition.stop();
      }
      setListening(!listening);
    }
  };

  const handleMute = () => {
    setMuted(!muted);
  };

  return (
    <div className={styles.container}>
      {isWorking ? (
        <div className={styles.assistant}>
          <div className={styles.header}>
            <div>
              <AiFillSmile size={40} className={styles.icon2} />
            </div>
            <div>
              <h4>
                <i>Virtual Assistant</i>
              </h4>
            </div>
            <button onClick={handleToggle} className={styles.closeButton}>
              <AiOutlineClose />
            </button>
          </div>
          <div className={styles.chatContainer}>
            {loading ? (
              <Loading size="20px" />
            ) : response && !listening ? (
              <div className={styles.response}>{response}</div>
            ) : null}

            <div className={styles.chat}>
              <div className={styles.question}>
                <input
                  type="text"
                  placeholder="Type your question here..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  disabled={loading}
                />
                <button onClick={handleSubmit} disabled={loading}>
                  <AiOutlineSend />
                </button>
              </div>
              <div className={styles.btnContainer}>
                <div
                  className={`${styles.listenButton} ${
                    listening ? styles.listenButtonActive : ""
                  }`}
                  onClick={handleStartStopListening}
                >
                  {listening ? (
                    <AiOutlineAudio size={24} />
                  ) : (
                    <AiOutlineAudioMuted size={24} />
                  )}
                </div>
                <div
                  className={`${styles.listenButton} ${
                    muted ? styles.listenButton : ""
                  }`}
                  onClick={handleMute}
                >
                  {!muted ? (
                    <AiOutlineSound size={24} />
                  ) : (
                    <AiOutlineNotification size={24} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.icon} onClick={handleToggle}>
          <AiFillSmile size={80}></AiFillSmile>
        </div>
      )}
    </div>
  );
};
export default VirtualAssistant;
