# DosVoces API Documentation

Welcome to the DosVoces API documentation! This guide will help you understand and interact with the API endpoints provided by DosVoces.

## Base URL

The base URL for all API requests is `https://api.dosvoces.com/v1`.

## Authentication

To access the DosVoces API, you need to include your API key in the headers of your requests. Include the following header:

Authorization: Bearer YOUR_API_KEY

Replace `YOUR_API_KEY` with your actual API key.

## Endpoints

### Get Polls

- Endpoint: `/polls`
- Method: GET
- Description: Retrieve a list of all polls.
- Parameters: None
- Response: An array of poll objects.

Example Request:

GET /polls

### Create Poll

- Endpoint: `/polls`
- Method: POST
- Description: Create a new poll.
- Parameters: The poll data in the request body.
- Response: The created poll object.

Example Request:

POST /polls

{
  "question": "What is your favorite color?",
  "options": ["Red", "Blue", "Green"]
}

### Get Poll Details

- Endpoint: `/polls/{pollId}`
- Method: GET
- Description: Retrieve details of a specific poll.
- Parameters: The `pollId` as a path parameter.
- Response: The poll object with the specified `pollId`.

Example Request:

GET /polls/123456789

Feel free to explore other endpoints and their functionalities. If you have any questions or need further assistance, please refer to the DosVoces API documentation or contact our support team.

Happy polling!
