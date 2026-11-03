# ZAInnovate Technologies

Corporate site and public product index for ZAInnovate Technologies (Pty) Ltd, an East London technology studio building software for South African institutions, SMMEs, and learners.

## What this repository does

- Presents the company, products, and delivery capabilities.
- Routes qualified enquiries through `POST /api/contact`.
- Uses a small Next.js application with TypeScript and Tailwind CSS.

## Product context

ZAInnovate builds systems around real operating constraints: South African statutory workflows, ZAR commerce, public-sector accountability, multilingual education, and unreliable connectivity. The site should describe shipped capabilities accurately. Do not add invented metrics, clients, testimonials, certifications, or delivery claims.

## Development

```bash
npm ci
npm run dev
npm test
npm run build
```

Keep TypeScript strict, validate contact payloads at the API boundary, and keep the public site usable by keyboard, screen reader, and mobile users. Verify rendered changes at desktop and phone widths.

## Content standard

Write in plain, specific language. Name the customer problem, the product behavior, and the evidence. Remove slogans that do not explain what the company or product does.

## License

See `LICENSE`.
