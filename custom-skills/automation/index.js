/**
 * automation/index.js
 * ───────────────────
 * Central export for all automation skills.
 *
 * This folder holds helpers for:
 *   - n8n workflow building blocks
 *   - Scheduled task runners
 *   - Webhook handlers and dispatchers
 *   - API polling and retry logic
 *   - Event-driven automation patterns
 *
 * Usage:
 *   const { someHelper } = require('./automation');
 *
 * Add new skills:
 *   1. Create a new file in this folder (e.g., retryWithBackoff.js)
 *   2. Export it below
 */

// --- Exports ---
// Uncomment and add as skills are built:

// const { retryWithBackoff } = require('./retryWithBackoff');
// const { webhookDispatcher } = require('./webhookDispatcher');
// const { pollUntilDone } = require('./pollUntilDone');

module.exports = {
  // retryWithBackoff,
  // webhookDispatcher,
  // pollUntilDone,
};
