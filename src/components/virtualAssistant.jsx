// import React, { Component } from "react";
// import styles from "./virtualAssistant.module.css";
// import { ASSISTANT_ID, auth, openai } from "../../config/firebaseConfig";
// class VirtualAssistant extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isVisible: true,
//       message: "",
//       isSpeaking: false,
//       isInputVisible: false,
//       userInput: "",
//       inputObject: null,
//       thread: null,
//       currentContent: null,
//     };

//     // Initialize SpeechSynthesisUtterance instance
//     if (typeof window !== "undefined") {
//       this.speechSynthesis = window.speechSynthesis;
//       this.synth = new SpeechSynthesisUtterance();
//     }
//   }

//   clearSpeechQueue = () => {
//     // Clear the speech synthesis queue
//     this.speechSynthesis.cancel();
//   };

//   showAssistant = (msg) => {
//     // Update: Clear the speech synthesis queue before speaking
//     this.clearSpeechQueue();

//     this.setState({
//       message: msg,
//       isSpeaking: true,
//       isVisible: true,
//       isInputVisible: false,
//     });
//     // Speak out loud
//     this.synth.text = msg;
//     this.speechSynthesis.speak(this.synth);
//   };

//   closeMessage = () => {
//     this.clearSpeechQueue();

//     // Close the displayed message
//     this.setState({
//       isSpeaking: false,
//       isVisible: false,
//     });
//   };

//   toggleInput = () => {
//     this.setState((prevState) => ({
//       isInputVisible: !prevState.isInputVisible,
//     }));
//   };

//   handleInputChange = (e) => {
//     this.setState({
//       userInput: e.target.value,
//     });
//   };
//   handleWelcomeMessage = async ({ level }) => {
//     const thread = await openai.beta.threads.create();
//     this.setState({ thread: thread });
//     const message = await openai.beta.threads.messages.create(thread.id, {
//       role: "user",
//       content: level,
//     });
//     let run = await openai.beta.threads.runs.createAndPoll(thread.id, {
//       assistant_id: ASSISTANT_ID,
//     });
//     if (run.status === "completed") {
//       const messages = await openai.beta.threads.messages.list(run.thread_id);
//       for (const message of messages.data.reverse()) {
//         this.showAssistant(message.content[0].text.value);
//       }
//     } else {
//       this.showAssistant("Loading, please wait.");
//     }
//   };
//   handleAction = async ({ level }) => {
//     const thread = await openai.beta.threads.create();
//     this.setState({ thread: thread });
//     const message = await openai.beta.threads.messages.create(thread.id, {
//       role: "user",
//       content: level,
//     });
//     let run = await openai.beta.threads.runs.createAndPoll(thread.id, {
//       assistant_id: ASSISTANT_ID,
//     });
//     if (run.status === "completed") {
//       const messages = await openai.beta.threads.messages.list(run.thread_id);
//       for (const message of messages.data.reverse()) {
//         this.showAssistant(message.content[0].text.value);
//       }
//     } else {
//       this.showAssistant("Loading, please wait.");
//     }
//   };
//   setCurrentContent = ({ curr }) => {
//     console.log("current content", curr);
//     this.setState({
//       currentContent: curr,
//     });
//   };

//   handleAskQuestion = async () => {
//     if (this.state.userInput && this.state.currentContent) {
//       const thread = this.state.thread;
//       const message = await openai.beta.threads.messages.create(thread.id, {
//         role: "user",
//         content: `This is the content: ${this.state.currentContent}`,
//       });
//       let run = await openai.beta.threads.runs.createAndPoll(thread.id, {
//         assistant_id: ASSISTANT_ID,
//       });
//       if (run.status === "completed") {
//        const messages = await openai.beta.threads.messages.list(run.thread_id);
//         for (const message of messages.data.reverse()) {
//           this.showAssistant(message.content[0].text.value);
//         }
//       } else {
//         this.showAssistant("Loading, please wait.");
//       }
//     } else {
//       console.log("No current content provided");
//     }
//   };
//   handleAction = async ({ actionOb }) => {
//     if (this.state.userInput && actionOb) {
//       const thread = this.state.thread;
//       const message = await openai.beta.threads.messages.create(thread.id, {
//         role: "user",
//         content: actionOb,
//       });
//       let run = await openai.beta.threads.runs.createAndPoll(thread.id, {
//         assistant_id: ASSISTANT_ID,
//       });
//       if (run.status === "completed") {
//         const messages = await openai.beta.threads.messages.list(run.thread_id);
//         for (const message of messages.data.reverse()) {
//           this.showAssistant(message.content[0].text.value);
//         }
//       } else {
//         this.showAssistant("Loading, please wait.");
//       }
//     } else {
//       console.log("No action obj");
//     }
//   };
//   render() {
//     const {
//       isVisible,
//       message,
//       isSpeaking,
//       isInputVisible,
//       userInput,
//       inputObject,
//     } = this.state;

//     return (
//       <div className={styles.virtualAssistant}>
//         <div
//           className={styles.icon}
//           onClick={() => this.setState({ isVisible: !isVisible })}
//         >
//           🤖
//         </div>

//         {isInputVisible ? (
//           <div className={styles.inputContainer}>
//             <textarea
//               value={userInput}
//               onChange={this.handleInputChange}
//               placeholder="Ask a question or respond..."
//               className="form-control"
//             />
//             <button
//               onClick={this.handleAskQuestion}
//               className="btn btn-primary"
//               style={{ width: "fit-content", marginTop: 10 }}
//             >
//               Submit
//             </button>
//             <button
//               className={styles.closeButton}
//               onClick={() => {
//                 this.setState({ isInputVisible: false });
//               }}
//             >
//               x
//             </button>
//           </div>
//         ) : (
//           <div className={styles.floatingView} onClick={this.toggleInput}>
//             Need help?
//           </div>
//         )}
//         <div
//           className={`${styles.messageContainer} ${
//             isSpeaking ? styles.speaking : ""
//           }`}
//         >
//           {message}
//           {isSpeaking && (
//             <button className={styles.closeButton} onClick={this.closeMessage}>
//               x
//             </button>
//           )}
//         </div>
//         {isSpeaking && (
//           <div className={styles.inputContainer}>
//             <textarea
//               value={userInput}
//               onChange={this.handleInputChange}
//               placeholder="Ask a question or respond..."
//               className="form-control"
//             />
//             <button
//               onClick={this.handleAskQuestion}
//               className="btn btn-primary"
//               style={{ width: "fit-content", marginTop: 10 }}
//             >
//               Submit
//             </button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default VirtualAssistant;
import React, { Component } from "react";
import styles from "./virtualAssistant.module.css";
import { ASSISTANT_ID, openai } from "../../config/firebaseConfig";

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
      thread: null,
      currentContent: null,
      isLoading: false,
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

  handleWelcomeMessage = async ({ level }) => {
    this.setState({ isLoading: true });
    try {
      const thread = await openai.beta.threads.create();
      this.setState({ thread: thread });
      const message = await openai.beta.threads.messages.create(thread.id, {
        role: "user",
        content: level,
      });
      let run = await openai.beta.threads.runs.createAndPoll(thread.id, {
        assistant_id: ASSISTANT_ID,
      });
      if (run.status === "completed") {
        const messages = await openai.beta.threads.messages.list(run.thread_id);
        for (const message of messages.data.reverse()) {
          this.showAssistant(message.content[0].text.value);
        }
      } else {
        this.showAssistant("Loading, please wait.");
      }
    } catch (error) {
      console.error("Error handling welcome message:", error);
      this.showAssistant("Oops! Something went wrong.");
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleAction = async ({ level }) => {
    this.setState({ isLoading: true });
    try {
      const thread = await openai.beta.threads.create();
      this.setState({ thread: thread });
      const message = await openai.beta.threads.messages.create(thread.id, {
        role: "user",
        content: level,
      });
      let run = await openai.beta.threads.runs.createAndPoll(thread.id, {
        assistant_id: ASSISTANT_ID,
      });
      if (run.status === "completed") {
        const messages = await openai.beta.threads.messages.list(run.thread_id);
        for (const message of messages.data.reverse()) {
          this.showAssistant(message.content[0].text.value);
        }
      } else {
        this.showAssistant("Loading, please wait.");
      }
    } catch (error) {
      console.error("Error handling action:", error);
      this.showAssistant("Oops! Something went wrong.");
    } finally {
      this.setState({ isLoading: false });
    }
  };

  setCurrentContent = ({ curr }) => {
    console.log("current content", curr);
    this.setState({
      currentContent: curr,
    });
  };

  handleAskQuestion = async () => {
    if (this.state.userInput && this.state.currentContent) {
      this.setState({ isLoading: true });
      try {
        const thread = this.state.thread;
        const message = await openai.beta.threads.messages.create(thread.id, {
          role: "user",
          content: `This is the content: ${this.state.currentContent}`,
        });
        let run = await openai.beta.threads.runs.createAndPoll(thread.id, {
          assistant_id: ASSISTANT_ID,
        });
        if (run.status === "completed") {
          const messages = await openai.beta.threads.messages.list(
            run.thread_id
          );
          for (const message of messages.data.reverse()) {
            this.showAssistant(message.content[0].text.value);
          }
        } else {
          this.showAssistant("Loading, please wait.");
        }
      } catch (error) {
        console.error("Error handling question:", error);
        this.showAssistant("Oops! Something went wrong.");
      } finally {
        this.setState({ isLoading: false });
      }
    } else {
      console.log("No current content provided");
    }
  };

  render() {
    const {
      isVisible,
      message,
      isSpeaking,
      isInputVisible,
      userInput,
      isLoading,
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
          {isLoading ? (
            <div className={styles.loading}>Loading...</div>
          ) : (
            message
          )}
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
