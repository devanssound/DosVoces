# 🛠️ Developer Guide for DosVoces

This document provides an overview of the DosVoces project, including its goals, architecture, and development practices, as well as guidance for interacting with the project's AI assistant.

## 🎯 Project Goals

DosVoces is a polling web application that encourages users to share their perspectives through polls. The application aims to provide a platform for open, democratic exchange of views on a wide range of topics.

The key goals of the DosVoces project are:

- To create a user-friendly application where anyone can create, participate in, and discuss polls.
- To ensure that the application is accessible and welcoming to users of all backgrounds.
- To maintain high standards of data security and user privacy.

## 🏗️ Architecture

DosVoces is built using the MERN stack:

- MongoDB: a NoSQL database used for storing poll data, user accounts, and other application data.
- Express.js: a back-end web application framework running on Node.js.
- React.js: a JavaScript library for building the application's user interface.
- Node.js: the JavaScript runtime enabling back-end development in JavaScript.

Additional technologies used in the project include Passport.js for authentication, Helmet.js for secure HTTP headers, and Ngrok for creating secure tunnels to the local development environment.

The project also incorporates several measures to prevent bot spamming and ensure genuine user interactions, including rate limiting and CAPTCHA.

## 🔄 Development Practices

The DosVoces project follows standard web development best practices, including:

- Using Git for version control.
- Writing unit, integration, and end-to-end tests.
- Regularly reviewing and refactoring code to maintain code quality.
- Following the Contributor Covenant Code of Conduct in all project interactions.

## 🤖 Interacting with the AI Assistant

The project uses a GPT-based AI assistant to aid in development. The assistant can be used for a variety of tasks, including troubleshooting, brainstorming design ideas, and generating code snippets.

When interacting with the AI assistant, it's important to provide clear, detailed prompts. The assistant's knowledge is based on a broad training dataset, but it does not have access to specific information about the DosVoces project unless it is provided in the prompt or previous conversation.

Here are some examples of prompts you might use with the AI assistant:

- "Can you help me troubleshoot a problem with my Express.js router?"
- "What are some ways I could improve the user interface of my polling application?"
- "Could you generate a code snippet showing how to implement user authentication with Passport.js?"

Remember that the AI assistant's responses should be reviewed and potentially modified by a human developer before being incorporated into the project.
