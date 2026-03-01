# ai/

Prompts, agent logic, LLM wrappers, and AI tool definitions.

## What Goes Here

- **Prompt templates** — reusable system prompts for specific tasks
- **Claude API helpers** — typed wrappers around the Anthropic SDK
- **Agent definitions** — tool schemas, agent loops, handoff logic
- **Output parsers** — extract JSON, lists, or structured data from LLM responses
- **Chain patterns** — sequential, parallel, and conditional LLM call patterns
- **Evaluation helpers** — score or validate LLM outputs programmatically

## Planned Skills

| File | Description | Status |
|---|---|---|
| `callClaude.js` | Simple Anthropic SDK wrapper with model defaults | Planned |
| `extractJSON.js` | Pull valid JSON from an LLM response string | Planned |
| `buildSystemPrompt.js` | Compose a system prompt from reusable sections | Planned |
| `retryOnRefusal.js` | Retry a prompt with rephrasing if model refuses | Planned |
| `prompts/` | Folder of tested, versioned prompt templates | Planned |

## Model Reference

```js
// Current Claude models (2026):
const MODELS = {
  opus:   'claude-opus-4-6',              // Most capable
  sonnet: 'claude-sonnet-4-6',            // Default — balanced
  haiku:  'claude-haiku-4-5-20251001',    // Fastest / cheapest
};
```

## Example Usage

```js
// Once callClaude.js is added:
const { callClaude } = require('./ai');

const response = await callClaude({
  model: 'sonnet',
  system: 'You are a helpful data analyst.',
  user: 'Summarize this CSV: ...',
});
```
