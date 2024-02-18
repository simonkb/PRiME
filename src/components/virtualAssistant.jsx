import React, { Component } from "react";
import styles from "./virtualAssistant.module.css";

class VirtualAssistant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      message: "",
      isSpeaking: false,
    };
    // Initialize SpeechSynthesisUtterance instance
    if (typeof window !== "undefined") {
      this.speechSynthesis = window.speechSynthesis;
      this.synth = new SpeechSynthesisUtterance();
    }
  }

  showAssistant = (msg) => {
    this.setState({
      message: msg,
      isSpeaking: true,
      isVisible: true,
    });
    // Speak out loud
    this.synth.text = msg;
    this.speechSynthesis.speak(this.synth);
  };

  render() {
    const { isVisible, message, isSpeaking } = this.state;

    return (
      <div
        className={`${styles.virtualAssistant} ${
          isVisible ? styles.visible : ""
        }`}
      >
        <div
          className={styles.icon}
          onClick={() => this.setState({ isVisible: !isVisible })}
        >
          🤖
        </div>
        <div
          className={`${styles.messageContainer} ${
            isSpeaking ? styles.speaking : ""
          }`}
        >
          {message}
        </div>
      </div>
    );
  }
}

export default VirtualAssistant;
