# Santos Dumont Digital Agency

![App Preview](https://imgix.cosmicjs.com/59f54870-bb45-11f0-9e60-eb4ff44be017-photo-1542744173-8e7e53415bb0-1762456698026.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, full-featured digital agency website built with Next.js 16 and Cosmic CMS. This application showcases services, team members, client testimonials, and detailed case studies in a beautifully designed, responsive interface.

## Features

- 🎨 **Modern Design** - Clean, professional interface with smooth animations
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🚀 **Server-Side Rendering** - Built with Next.js 16 App Router for optimal performance
- 🎯 **Dynamic Content** - All content managed through Cosmic CMS
- 📊 **Case Studies** - Detailed project showcases with challenges, solutions, and results
- 👥 **Team Profiles** - Professional team member bios with photos and social links
- ⭐ **Client Testimonials** - Star-rated testimonials with client information
- 💼 **Services Showcase** - Comprehensive service listings with pricing
- 🖼️ **Image Galleries** - Project galleries with imgix optimization
- 🔒 **Type-Safe** - Full TypeScript implementation with strict typing
- ♿ **Accessible** - WCAG compliant with semantic HTML

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=690cf3c7fb7423bbdde4c370&clone_repository=690cf5a7fb7423bbdde4c39c)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a company website with services, team members, testimonials, and case studies. "As invenções são sobretudo o resultado de um trabalho teimoso" (Santos Dumont)"

### Code Generation Prompt

> Based on the content model I created for "Create a content model for a company website with services, team members, testimonials, and case studies. "As invenções são sobretudo o resultado de um trabalho teimoso" (Santos Dumont)", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic SDK** - Headless CMS integration
- **React 19** - Latest React features
- **Imgix** - Image optimization

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with bucket configured
- Environment variables from your Cosmic bucket

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Services

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Team Members

```typescript
const { objects: team } = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Case Studies

```typescript
const { objects: caseStudies } = await cosmic.objects
  .find({ type: 'case-studies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This application is fully integrated with Cosmic CMS and uses the following content types:

- **Services** - Service offerings with descriptions, pricing, and icons
- **Team Members** - Team profiles with photos, bios, and social links
- **Testimonials** - Client testimonials with ratings and photos
- **Case Studies** - Detailed project showcases with galleries and connected services

All content is fetched server-side for optimal SEO and performance. Images are optimized using imgix query parameters for fast loading across all devices.

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Click the "Deploy with Vercel" button above
2. Connect your Git repository
3. Add your environment variables in Vercel's dashboard:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Click the "Deploy to Netlify" button above
2. Connect your Git repository
3. Add your environment variables in Netlify's dashboard
4. Deploy!

## Learn More

- [Cosmic Docs](https://www.cosmicjs.com/docs) - Learn about Cosmic CMS
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework

<!-- README_END -->