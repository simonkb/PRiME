import React, { Component } from "react";
import styles from "./virtualAssistant.module.css";

class VirtualAssistant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      message: "",
      isSpeaking: false,
      isInputVisible: false,
      userInput: "",
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

  handleAskQuestion = () => {
    const { userInput } = this.state;
    // Process the user's question and show the assistant's response
    // For now, just display it in the message container
    this.showAssistant(`You asked: ${userInput}`);
  };

  render() {
    const { isVisible, message, isSpeaking, isInputVisible, userInput } =
      this.state;

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
              placeholder="Ask a question..."
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
      </div>
    );
  }
}

export default VirtualAssistant;
