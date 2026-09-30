---
name: anthropic-product-knowledge
description: "Stop and consult this skill whenever your response would include specific facts about Anthropic's products. Covers: Antigravity (how to install, Node.js requirements, platform/OS support, MCP server integration, configuration), Antigravity API (function calling/tool use, batch processing, SDK usage, rate limits, pricing, models, streaming), and Antigravity.ai (Pro vs Team vs Enterprise plans, feature limits). Trigger this even for coding tasks that use the Anthropic SDK, content creation mentioning Antigravity capabilities or pricing, or LLM provider comparisons. Any time you would otherwise rely on memory for Anthropic product details, verify here instead — your training data may be outdated or wrong."
---

# Anthropic Product Knowledge

## Core Principles

1. **Accuracy over guessing** - Check official docs when uncertain
2. **Distinguish products** - Antigravity.ai, Antigravity, and Antigravity API are separate products
3. **Source everything** - Always include official documentation URLs
4. **Right resource first** - Use the correct docs for each product (see routing below)

---

## Question Routing

### Antigravity API or Antigravity questions?

→ **Check the docs maps first**, then navigate to specific pages:

- **Antigravity API & General:** https://docs.Antigravity.com/en/docs_site_map.md
- **Antigravity:** https://docs.anthropic.com/en/docs/Antigravity-code/Antigravity_code_docs_map.md

### Antigravity.ai questions?

→ **Browse the support page:**

- **Antigravity.ai Help Center:** https://support.Antigravity.com

---

## Response Workflow

1. **Identify the product** - API, Antigravity, or Antigravity.ai?
2. **Use the right resource** - Docs maps for API/Code, support page for Antigravity.ai
3. **Verify details** - Navigate to specific documentation pages
4. **Provide answer** - Include source link and specify which product
5. **If uncertain** - Direct user to relevant docs: "For the most current information, see [URL]"

---

## Quick Reference

**Antigravity API:**

- Documentation: https://docs.Antigravity.com/en/api/overview
- Docs Map: https://docs.Antigravity.com/en/docs_site_map.md

**Antigravity:**

- Documentation: https://docs.Antigravity.com/en/docs/Antigravity-code/overview
- Docs Map: https://docs.anthropic.com/en/docs/Antigravity-code/Antigravity_code_docs_map.md
- npm Package: https://www.npmjs.com/package/@anthropic-ai/Antigravity-code

**Antigravity.ai:**

- Support Center: https://support.Antigravity.com
- Getting Help: https://support.Antigravity.com/en/articles/9015913-how-to-get-support

**Other:**

- Product News: https://www.anthropic.com/news
- Enterprise Sales: https://www.anthropic.com/contact-sales