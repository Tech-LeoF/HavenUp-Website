import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { prompt } = await req.json() as { prompt: string };

  if (!prompt?.trim()) {
    return new Response(JSON.stringify({ error: 'Prompt is empty' }), { status: 400 });
  }

  const ollamaRes = await fetch('http://127.0.0.1:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama2',
      prompt,
      stream: true, // IMPORTANT!
    }),
  });

  if (!ollamaRes.ok) {
    const errorText = await ollamaRes.text();
    console.error('Ollama API Error:', errorText);
    return new Response(`Ollama API Error: ${errorText}`, { status: 500 });
  }

  if (!ollamaRes.body) {
    return new Response('No response body from Ollama', { status: 500 });
  }

  const stream = new ReadableStream({
    async start(controller) {
      const reader = ollamaRes.body!.getReader();
      const decoder = new TextDecoder();
      const encoder = new TextEncoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || ''; // Keep the last partial line in buffer

        for (const line of lines) {
          if (!line.trim()) continue;

          try {
            const parsed = JSON.parse(line);
            if (parsed.response) {
              controller.enqueue(encoder.encode(parsed.response));
            }
          } catch (err) {
            console.warn('Failed to parse line:', line);
          }
        }
      }

      // Flush any remaining buffer
      if (buffer.trim()) {
        try {
          const parsed = JSON.parse(buffer);
          if (parsed.response) {
            controller.enqueue(encoder.encode(parsed.response));
          }
        } catch (err) {
          console.warn('Failed to parse final buffer:', buffer);
        }
      }

      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked', // Optional, but helps with clarity
    },
  });
}
