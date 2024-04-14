import React, { Component } from "react";
import styles from "./virtualAssistant.module.css";
import { ASSISTANT_ID, auth, openai } from "../../config/firebaseConfig";
class VirtualAssistant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      message: "",
      isSpeaking: false,
      isInputVisible: false,
      userInput: "",
      inputObject: null,
    };

    // Initialize SpeechSynthesisUtterance instance
    if (typeof window !== "undefined") {
      this.speechSynthesis = window.speechSynthesis;
      this.synth = new SpeechSynthesisUtterance();
    }
  }

  clearSpeechQueue = () => {
    // Clear the speech synthesis queue
    this.speechSynthesis.cancel();
  };

  showAssistant = (msg) => {
    // Update: Clear the speech synthesis queue before speaking
    this.clearSpeechQueue();

    this.setState({
      message: msg,
      isSpeaking: true,
      isVisible: true,
      isInputVisible: false,
    });
    // Speak out loud
    this.synth.text = msg;
    this.speechSynthesis.speak(this.synth);
  };

  closeMessage = () => {
    this.clearSpeechQueue();

    // Close the displayed message
    this.setState({
      isSpeaking: false,
      isVisible: false,
    });
  };

  toggleInput = () => {
    this.setState((prevState) => ({
      isInputVisible: !prevState.isInputVisible,
    }));
  };

  handleInputChange = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  handleAskQuestion = async () => {
    if (this.state.userInput) {
      const thread = await openai.beta.threads.create();
      const message = await openai.beta.threads.messages.create(thread.id, {
        role: "user",
        content: this.state.userInput,
      });
      let run = await openai.beta.threads.runs.createAndPoll(thread.id, {
        assistant_id: ASSISTANT_ID,
      });
      if (run.status === "completed") {
        const messages = await openai.beta.threads.messages.list(run.thread_id);
        for (const message of messages.data.reverse()) {
          console.log(`${message.role} > ${message.content[0].text.value}`);
          this.showAssistant(message.content[0].text.value);
        }
      } else {
        this.showAssistant("Loading, please wait.");
      }
    }
  };

  render() {
    const {
      isVisible,
      message,
      isSpeaking,
      isInputVisible,
      userInput,
      inputObject,
    } = this.state;

    return (
      <div className={styles.virtualAssistant}>
        <div
          className={styles.icon}
          onClick={() => this.setState({ isVisible: !isVisible })}
        >
          🤖
        </div>

        {isInputVisible ? (
          <div className={styles.inputContainer}>
            <textarea
              value={userInput}
              onChange={this.handleInputChange}
              placeholder="Ask a question or respond..."
              className="form-control"
            />
            <button
              onClick={this.handleAskQuestion}
              className="btn btn-primary"
              style={{ width: "fit-content", marginTop: 10 }}
            >
              Submit
            </button>
            <button
              className={styles.closeButton}
              onClick={() => {
                this.setState({ isInputVisible: false });
              }}
            >
              x
            </button>
          </div>
        ) : (
          <div className={styles.floatingView} onClick={this.toggleInput}>
            Need help?
          </div>
        )}
        <div
          className={`${styles.messageContainer} ${
            isSpeaking ? styles.speaking : ""
          }`}
        >
          {message}
          {isSpeaking && (
            <button className={styles.closeButton} onClick={this.closeMessage}>
              x
            </button>
          )}
        </div>
        {isSpeaking && (
          <div className={styles.inputContainer}>
            <textarea
              value={userInput}
              onChange={this.handleInputChange}
              placeholder="Ask a question or respond..."
              className="form-control"
            />
            <button
              onClick={this.handleAskQuestion}
              className="btn btn-primary"
              style={{ width: "fit-content", marginTop: 10 }}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default VirtualAssistant;
