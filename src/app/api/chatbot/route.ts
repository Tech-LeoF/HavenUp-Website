import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
const { prompt } = await req.json() as { prompt: string };

if (!prompt?.trim()) {
    return new Response(JSON.stringify({ error: 'Prompt is empty' }), { status: 400 });
}

const res = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'gemma3:4b', prompt }),
});

if (!res.body) return new Response('No response body', { status: 500 });

const stream = new ReadableStream({
    async start(controller) {
    const reader = res.body!.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
        if (!line.trim()) continue;
        try {
            const obj = JSON.parse(line);
            if (obj.response) {
            const chunk = new TextEncoder().encode(obj.response);
            controller.enqueue(chunk);
            }
        } catch {
            // ignore non-JSON lines
        }
        }
    }

      // flush any remaining buffer
    if (buffer.trim()) {
        try {
        const obj = JSON.parse(buffer);
        if (obj.response) {
            controller.enqueue(new TextEncoder().encode(obj.response));
        }
        } catch {}
    }

    controller.close();
    },
});

return new Response(stream, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
});
}
