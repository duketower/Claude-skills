/**
 * utils/index.js
 * ──────────────
 * Central export for general-purpose utility functions.
 *
 * This folder holds small, dependency-free helpers used across
 * multiple projects. If a function is used in more than one place,
 * it belongs here.
 *
 * Categories:
 *   - String manipulation (slugify, truncate, capitalize)
 *   - Date/time formatting and parsing
 *   - Array/object helpers (groupBy, chunk, deepMerge)
 *   - File system utilities (ensureDir, readJSON, writeJSON)
 *   - Environment helpers (loadEnv, requireEnv)
 *   - Logging (colorized console output, structured logs)
 *
 * Usage:
 *   const { slugify, groupBy } = require('./utils');
 */

// --- Exports ---

const {
  formatRupee, formatNumber, formatDate,
  formatPhone, formatGST, slugify, truncate, capitalize,
} = require('./formatters');

// Planned (not yet added):
// const { groupBy, chunk } = require('./arrayHelpers');
// const { readJSON, writeJSON } = require('./fileHelpers');
// const { requireEnv } = require('./envHelpers');
// const { log } = require('./logger');

module.exports = {
  // Indian formatters
  formatRupee,
  formatNumber,
  formatDate,
  formatPhone,
  formatGST,

  // String helpers
  slugify,
  truncate,
  capitalize,
};
