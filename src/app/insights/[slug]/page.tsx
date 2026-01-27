import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";

// Placeholder - will be replaced with Sanity data fetching
const getPost = (slug: string) => {
  const posts: Record<string, {
    title: string;
    excerpt: string;
    content: string;
    category: string;
    author: string;
    publishedAt: string;
    readTime: string;
  }> = {
    "bridging-finance-guide-2024": {
      title: "The Complete Guide to Bridging Finance in 2024",
      excerpt:
        "Everything you need to know about bridging loans, from how they work to when to use them.",
      content: `
## What is Bridging Finance?

Bridging finance is a short-term loan secured against property, typically used to "bridge" a gap between buying a new property and selling an existing one, or to move quickly on time-sensitive transactions like auction purchases.

## When to Use Bridging Finance

Bridging loans are ideal for:

- **Auction purchases** - When you need to complete within 28 days
- **Chain breaks** - To secure a property while waiting for your sale to complete
- **Refurbishment projects** - Properties that are unmortgageable in their current state
- **Business opportunities** - When you need funds quickly
- **Development site acquisition** - To secure land before development finance is arranged

## How Bridging Finance Works

Bridging loans typically work as follows:

1. **Application** - Submit your requirements and property details
2. **Valuation** - The lender values the security property
3. **Offer** - You receive formal loan terms
4. **Legal** - Solicitors complete the legal process
5. **Completion** - Funds are released

The process can complete in as little as 48 hours with the right preparation.

## Costs to Consider

When budgeting for bridging finance, consider:

- **Interest** - Typically 0.5% - 1.5% per month
- **Arrangement fee** - Usually 1-2% of the loan
- **Valuation fee** - Varies by property value
- **Legal fees** - For both your solicitor and the lender's
- **Exit fee** - Some lenders charge an exit fee

## Exit Strategies

Lenders need to see a clear exit strategy. Common exits include:

- Sale of the property
- Refinance onto a long-term mortgage
- Sale of another property
- Development completion

## Getting the Best Terms

To secure the best bridging terms:

- Provide clear documentation
- Have a solid exit strategy
- Work with an experienced broker
- Be prepared to move quickly

## Summary

Bridging finance is a powerful tool for property investors and developers when used correctly. The key is understanding when it's appropriate and ensuring you have a clear exit strategy.

Want to discuss your bridging requirements? Contact us for a no-obligation consultation.
      `,
      category: "Property Finance",
      author: "Finance Team",
      publishedAt: "2024-01-15",
      readTime: "8 min read",
    },
  };

  return posts[slug] || null;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function InsightPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return (
      <section className="section-padding">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Button asChild>
            <Link href="/insights">Back to Insights</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-br from-primary via-primary to-[#072820] text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Link
              href="/insights"
              className="inline-flex items-center text-primary-foreground/70 hover:text-primary-foreground mb-4 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Insights
            </Link>
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-primary-foreground/70">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto prose prose-lg prose-headings:text-primary prose-a:text-secondary">
            <div
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/## /g, "<h2>")
                  .replace(/\n\n- /g, "</p><ul><li>")
                  .replace(/\n- /g, "</li><li>")
                  .replace(/<li>([^<]+)$/gm, "<li>$1</li></ul>")
                  .replace(/\n\n\d\. /g, "</p><ol><li>")
                  .replace(/\n\d\. /g, "</li><li>")
                  .replace(/<li>([^<]+)$/gm, "<li>$1</li></ol>")
                  .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
                  .replace(/\n\n/g, "</p><p>")
                  .replace(/^/, "<p>")
                  .replace(/$/, "</p>"),
              }}
            />
          </article>
        </div>
      </section>

      <CTASection />
    </>
  );
}
