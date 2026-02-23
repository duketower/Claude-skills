/**
 * ai/index.js
 * ───────────
 * Central export for all AI / LLM skills.
 *
 * This folder holds:
 *   - System prompts and prompt templates
 *   - Agent definitions and tool schemas
 *   - LLM chain patterns (sequential, parallel, conditional)
 *   - Output parsers (JSON extraction, structured data)
 *   - Claude API wrappers and helpers
 *   - Prompt engineering patterns that work well
 *
 * Usage:
 *   const { callClaude } = require('./ai');
 *
 * Model IDs (as of 2026):
 *   - claude-opus-4-6     — most capable, use for complex reasoning
 *   - claude-sonnet-4-6   — balanced speed + quality (default)
 *   - claude-haiku-4-5-20251001 — fastest, use for simple tasks
 */

// --- Exports ---
// Uncomment and add as skills are built:

// const { callClaude } = require('./callClaude');
// const { extractJSON } = require('./extractJSON');
// const { buildSystemPrompt } = require('./buildSystemPrompt');

module.exports = {
  // callClaude,
  // extractJSON,
  // buildSystemPrompt,
};
