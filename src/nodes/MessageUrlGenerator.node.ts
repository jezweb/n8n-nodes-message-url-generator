import { IExecuteFunctions } from 'n8n-workflow';
import { INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';

export class MessageUrlGenerator implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Message URL Generator',
		name: 'messageUrlGenerator',
		group: ['transform'],
		version: 1,
		description: 'Generate message and thread URLs from IDs',
		defaults: {
			name: 'Message URL Generator',
		},
		inputs: ['main'],
		outputs: ['main'],
		properties: [
			// Base URL for the message platform
			{
				displayName: 'Base URL',
				name: 'baseUrl',
				type: 'string',
				default: 'https://example.com',
				description: 'The base URL of the messaging platform',
				required: true,
			},
			// Message ID input
			{
				displayName: 'Message ID',
				name: 'messageId',
				type: 'string',
				default: '',
				description: 'ID of the message to generate URL for',
				required: false,
			},
			// Thread ID input
			{
				displayName: 'Thread ID',
				name: 'threadId',
				type: 'string',
				default: '',
				description: 'ID of the thread to generate URL for',
				required: false,
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		// Process each item
		for (let i = 0; i < items.length; i++) {
			const baseUrl = this.getNodeParameter('baseUrl', i) as string;
			const messageId = this.getNodeParameter('messageId', i, '') as string;
			const threadId = this.getNodeParameter('threadId', i, '') as string;

			// Initialize output object
			const outputItem: { 
				messageUrl?: string; 
				threadUrl?: string; 
				error?: string;
			} = {};

			// Error handling - check if at least one ID is provided
			if (!messageId && !threadId) {
				outputItem.error = 'At least one ID (message or thread) must be provided';
			} else {
				// Generate message URL if message ID is provided
				if (messageId) {
					try {
						outputItem.messageUrl = `${baseUrl}/messages/${messageId}`;
					} catch (error) {
						outputItem.error = `Error generating message URL: ${error}`;
					}
				}

				// Generate thread URL if thread ID is provided
				if (threadId) {
					try {
						outputItem.threadUrl = `${baseUrl}/threads/${threadId}`;
					} catch (error) {
						outputItem.error = `Error generating thread URL: ${error}`;
					}
				}
			}

			// Add the processed item to the output
			returnData.push({
				json: outputItem,
				pairedItem: { item: i },
			});
		}

		return [returnData];
	}
}