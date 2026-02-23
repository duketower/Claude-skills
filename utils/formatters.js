/**
 * utils/formatters.js
 * ───────────────────
 * Indian locale formatters for currency, numbers, dates, and phone numbers.
 * Designed for Indian market projects — all output follows en-IN conventions.
 *
 * Functions:
 *   formatRupee(amount, decimals)     — ₹1,49,999 style currency formatting
 *   formatNumber(n)                   — en-IN number with commas (1,00,000)
 *   formatDate(date, style)           — "23 February 2026" / "23 Feb 26" etc.
 *   formatPhone(phone)                — +91 73990 06699 display format
 *   formatGST(gstin)                  — XX-XXXXXXXXXX-X-XX display format
 *   slugify(str)                      — "Hello World!" → "hello-world"
 *   truncate(str, maxLen, suffix)     — Truncate with ellipsis
 *   capitalize(str)                   — "hello world" → "Hello World"
 *
 * Usage:
 *   const { formatRupee, formatDate } = require('./utils/formatters');
 *   formatRupee(149999);          // → "₹1,49,999"
 *   formatRupee(149999, 2);       // → "₹1,49,999.00"
 *   formatDate(new Date());       // → "23 February 2026"
 *   formatDate(new Date(), 'short'); // → "23 Feb 26"
 *   formatPhone('7399006699');    // → "+91 73990 06699"
 *
 * Source project: Binary Ventures — Website Startup (Indian market)
 */


/**
 * Format a number as Indian Rupee currency.
 * Uses en-IN locale so lakhs/crores are formatted correctly (1,00,000 not 100,000).
 *
 * @param {number} amount   — The amount to format
 * @param {number} decimals — Decimal places to show (default 0)
 * @returns {string}        — e.g. "₹1,49,999" or "₹99,999.00"
 */
function formatRupee(amount, decimals = 0) {
  return '₹' + Number(amount).toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}


/**
 * Format a plain number using en-IN locale (Indian comma grouping).
 *
 * @param {number} n — The number to format
 * @returns {string} — e.g. "1,00,000"
 */
function formatNumber(n) {
  return Number(n).toLocaleString('en-IN');
}


/**
 * Format a Date object into a human-readable Indian date string.
 *
 * @param {Date|string} date  — Date object or ISO string
 * @param {'long'|'short'|'numeric'} style — Output style (default 'long')
 *   'long'    → "23 February 2026"
 *   'short'   → "23 Feb 26"
 *   'numeric' → "23/02/2026"
 * @returns {string}
 */
function formatDate(date, style = 'long') {
  const d = date instanceof Date ? date : new Date(date);

  if (style === 'numeric') {
    return d.toLocaleDateString('en-IN'); // DD/MM/YYYY
  }

  if (style === 'short') {
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: '2-digit' });
  }

  // long (default)
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}


/**
 * Format a 10-digit Indian mobile number to display format.
 * Handles inputs with or without country code.
 *
 * @param {string|number} phone — Raw phone number (e.g. "7399006699" or "+917399006699")
 * @returns {string}            — "+91 73990 06699"
 */
function formatPhone(phone) {
  const digits = String(phone).replace(/\D/g, '');
  const local = digits.length === 12 ? digits.slice(2) : digits; // strip 91 if present
  if (local.length !== 10) return String(phone); // return as-is if unexpected length
  return `+91 ${local.slice(0, 5)} ${local.slice(5)}`;
}


/**
 * Format a GSTIN into a human-readable display format.
 *
 * @param {string} gstin — Raw GSTIN (e.g. "09AANCB3692D1ZG")
 * @returns {string}     — "09-AANCB3692D-1-Z-G" style, or original if invalid
 */
function formatGST(gstin) {
  const g = String(gstin).toUpperCase().replace(/\s/g, '');
  if (g.length !== 15) return gstin;
  return `${g.slice(0, 2)}-${g.slice(2, 12)}-${g.slice(12)}-`;
}


/**
 * Convert a string to a URL-friendly slug.
 *
 * @param {string} str — Input string
 * @returns {string}   — "Hello World!" → "hello-world"
 */
function slugify(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')   // remove special chars
    .replace(/[\s_]+/g, '-')    // spaces/underscores → hyphens
    .replace(/--+/g, '-');      // collapse multiple hyphens
}


/**
 * Truncate a string to a maximum length, appending a suffix if cut.
 *
 * @param {string} str    — Input string
 * @param {number} maxLen — Maximum character length (default 100)
 * @param {string} suffix — Appended when truncated (default '…')
 * @returns {string}
 */
function truncate(str, maxLen = 100, suffix = '…') {
  if (!str || str.length <= maxLen) return str;
  return str.slice(0, maxLen - suffix.length).trimEnd() + suffix;
}


/**
 * Title-case a string (capitalize the first letter of each word).
 *
 * @param {string} str — Input string
 * @returns {string}   — "hello world" → "Hello World"
 */
function capitalize(str) {
  return String(str).replace(/\b\w/g, c => c.toUpperCase());
}


module.exports = {
  formatRupee,
  formatNumber,
  formatDate,
  formatPhone,
  formatGST,
  slugify,
  truncate,
  capitalize,
};
