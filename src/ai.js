import 'dotenv/config'

export async function generateCommit(diff) {
  if (!process.env.OPENROUTER_API_KEY) {
    console.log("❌ Please set OPENROUTER_API_KEY");
    process.exit(1);
  }

  const prompt = `
Generate a conventional commit message:

${diff}

Rules:
- format: type: message
- types: feat, fix, refactor, docs, chore
`;

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "openrouter/free",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await res.json();
  
  if (data.error) {
    console.error("\n❌ OpenRouter Error:", data.error.message);
    process.exit(1);
  }

  if (!data.choices || data.choices.length === 0) {
    console.error("\n❌ No response from AI model.");
    process.exit(1);
  }

  return data.choices[0].message.content.trim();
}