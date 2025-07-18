const GROQ_API_KEY = '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'

export async function generateReadmeWithClaude(prompt: string) {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${GROQ_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'meta-llama/llama-4-scout-17b-16e-instruct',
            messages: [{role: 'user', content: prompt}]
        })
    })
    const data = await res.json()
    return data.choices[0].message.content
}
