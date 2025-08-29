import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    const systemPrompt = `You are a professional customer service representative. Keep your responses concise, friendly, and helpful. Focus on addressing the user's needs directly while maintaining a warm, professional tone.
   When returning JSON for use in n8n Response Body, remove \\n from final output.`;

    const response = await fetch('https://grittydigital.app.n8n.cloud/webhook/69b0a903-3607-420a-8125-2ec44b59188b/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        systemPrompt
      }),
    });

    // Log the response status and headers
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response from n8n:', errorText);
      throw new Error(`Failed to get response from AI service: ${response.status} ${response.statusText}`);
    }
    const responseDataJson = await response.json();
    console.log('Response data:', responseDataJson);

    // Return the output field from the response
    return NextResponse.json({ 
      output: responseDataJson.output || 'No response generated'
    });
  } catch (error) {
    console.error('Error processing chat request:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
} 