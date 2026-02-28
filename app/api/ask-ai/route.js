export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "qwen2.5:3b",
        prompt: body.prompt,
        stream: false,
      }),
    });

    const data = await response.json();

    return Response.json({ reply: data.response });

  } catch (error) {
    return Response.json({ error: "AI failed" }, { status: 500 });
  }
}