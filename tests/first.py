from openai import OpenAI

# Create OpenAI client
client = OpenAI(
    api_key="YOUR_API_KEY"
)

# Generate a response
response = client.responses.create(
    model="gpt-4.1",
    input="What is Microsoft Foundry?"
)

# Display the response
print(response.output_text)