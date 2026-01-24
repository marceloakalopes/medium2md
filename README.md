<p align="center">
  <img src="/public/images/m2md.png" alt="Medium2MD Logo" width="48" />
</p>

<h1 align="center">Medium2MD</h1>

<p align="center">
  <strong>The easiest way to convert Medium articles to Markdown</strong><br>
</p>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.7-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
</div>


## Features

- **Instant Conversion** - Convert Medium articles to Markdown in seconds
- **Split-Screen Editor** - Edit and preview your markdown side-by-side
- **Smart Cleanup** - Removes Medium-specific elements (author info, clap buttons, etc.)
- **Image Handling** - Preserves images with proper alt text and captions
- **Link Preservation** - Maintains all hyperlinks and references
- **Responsive Design** - Works perfectly on desktop and mobile devices
- **Real-time Preview** - See your changes instantly with syntax highlighting
- **Copy Support** - One-click paste from clipboard
- **Clean Output** - Produces clean, standardized Markdown format

## Quick Start


### Local Development

```bash
# Clone the repository
git clone https://github.com/marceloakalopes/medium2md.git

# Navigate to project directory
cd medium2md

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How It Works

1. **Input**: Paste any Medium article URL
2. **Fetch**: The app securely retrieves the article content
3. **Parse**: Advanced HTML parsing with Cheerio extracts the main content
4. **Clean**: Removes Medium-specific UI elements and clutter
5. **Convert**: Uses Turndown.js with custom rules for optimal Markdown output
6. **Edit**: Make final adjustments in the split-screen editor

## Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) with [Radix UI](https://www.radix-ui.com/)
- **HTML Parsing**: [Cheerio](https://cheerio.js.org/)
- **Markdown Conversion**: [Turndown](https://domchristie.github.io/turndown/)
- **Markdown Preview**: [React Markdown](https://remarkjs.github.io/react-markdown/)
- **Code Highlighting**: [Highlight.js](https://highlightjs.org/)
- **Icons**: [Lucide React](https://lucide.dev/) & [Nucleo Arcade](https://nucleoapp.com/)

## Usage Examples

### Basic Usage
```
1. Go to medium2md.com
2. Paste a Medium article URL (e.g., https://medium.com/@author/article-title)
3. Click "Convert"
4. Edit and copy the generated Markdown
```

### Supported URL Formats
- `https://medium.com/@username/article-title`
- `https://medium.com/publication/article-title`
- `https://username.medium.com/article-title`

## API Reference

### Convert Endpoint

```http
GET /api/convert?url={medium_url}
```

**Parameters:**
- `url` (required): The Medium article URL to convert

**Response:**
```json
{
  "error": false,
  "markdown": "# Article Title\n\n...",
  "title": "Article Title"
}
```

**Error Response:**
```json
{
  "error": true,
  "markdown": "Error message"
}
```

## Contributing

We welcome contributions! Here's how you can help:

### Development Setup

```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/YOUR_USERNAME/medium2md.git

# Create a feature branch
git checkout -b feature/amazing-feature

# Make your changes and commit
git commit -m "Add amazing feature"

# Push to your fork
git push origin feature/amazing-feature

# Create a Pull Request
```

### Code Style

- Use TypeScript for type safety
- Follow the existing code formatting
- Add comments for complex logic
- Write meaningful commit messages

### Areas for Contribution

- **Bug fixes** - Help us squash bugs
- **Features** - Add new functionality
- **UI/UX** - Improve the user interface
- **Documentation** - Enhance our docs
- **Testing** - Add test coverage
- **Accessibility** - Make it more accessible

## Running Tests

```bash
# Run linting
npm run lint

# Build the project
npm run build

# Start production server
npm start
```

## Project Structure

```
medium2md/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── convert/       # Conversion endpoint
│   ├── editor/            # Editor page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── toolbar.tsx       # Editor toolbar
├── lib/                  # Utility functions
│   └── medium/           # Medium conversion logic
├── context/              # React contexts
├── hooks/                # Custom hooks
└── public/               # Static assets
```

## Privacy & Security

- **No Data Storage**: We don't store your articles or personal data
- **Client-Side Processing**: Markdown editing happens in your browser
- **HTTPS Only**: All communications are encrypted
- **Open Source**: Full transparency - audit our code anytime

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Turndown](https://github.com/domchristie/turndown) for excellent HTML to Markdown conversion
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Vercel](https://vercel.com/) for deployment platform

## Support

- **Found a bug?** [Open an issue](https://github.com/marceloakalopes/medium2md/issues)
- **Have a feature request?** [Start a discussion](https://github.com/marceloakalopes/medium2md/discussions)
- **Need help?** [Check the FAQ](https://github.com/marceloakalopes/medium2md/wiki/FAQ)

## Stats

[![GitHub stars](https://img.shields.io/github/stars/marceloakalopes/medium2md?style=social)](https://github.com/marceloakalopes/medium2md/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/marceloakalopes/medium2md?style=social)](https://github.com/marceloakalopes/medium2md/network/members)
[![GitHub issues](https://img.shields.io/github/issues/marceloakalopes/medium2md)](https://github.com/marceloakalopes/medium2md/issues)

---