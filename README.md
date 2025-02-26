# n8n-nodes-message-url-generator

This is a simple n8n community node that generates message and thread URLs based on input IDs.

## Features

- Generate URLs for individual messages based on message IDs
- Generate URLs for entire threads based on thread IDs
- Basic error handling for missing or invalid inputs
- Configurable base URL for different messaging platforms

## Installation

### Method 1: Install directly from GitHub

1. Go to **Settings > Community Nodes**
2. Select **Install**
3. Enter `jezweb/n8n-nodes-message-url-generator` in **Enter npm package name**
4. Click **Install**

Alternatively, you can install it directly from the command line using the GitHub repository URL:

```bash
npm install -g github:jezweb/n8n-nodes-message-url-generator
```

Or in your n8n installation directory:

```bash
npm install github:jezweb/n8n-nodes-message-url-generator
```

### Method 2: Install from npm (Not available yet)

Once the package is published to npm, you can install it with:

```bash
npm install -g n8n-nodes-message-url-generator
```

## Usage

1. Add the "Message URL Generator" node to your workflow
2. Configure the base URL for your messaging platform (e.g., `https://example.com`)
3. Provide either a message ID, thread ID, or both
4. The node will output the generated URLs that can be used in subsequent workflow steps

### Inputs

- **Base URL**: The base URL of your messaging platform (required)
- **Message ID**: ID of the message to generate URL for (optional)
- **Thread ID**: ID of the thread to generate URL for (optional)

### Outputs

- **messageUrl**: The generated URL for the message (if a message ID was provided)
- **threadUrl**: The generated URL for the thread (if a thread ID was provided)
- **error**: Error message if something went wrong or if no IDs were provided

## Example

If you provide:
- Base URL: `https://chat.example.com`
- Message ID: `12345`
- Thread ID: `67890`

The node will output:
```json
{
  "messageUrl": "https://chat.example.com/messages/12345",
  "threadUrl": "https://chat.example.com/threads/67890"
}
```

## License

MIT