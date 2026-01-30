import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Insights | Finance News & Guides",
  description:
    "Expert insights on commercial finance, property investment, and business funding. Guides, news, and market updates from Aegis Finance.",
  alternates: {
    canonical: '/insights',
  },
};

// Placeholder posts - will be replaced with Sanity data
const placeholderPosts = [
  {
    slug: "bridging-finance-guide-2024",
    title: "The Complete Guide to Bridging Finance in 2024",
    excerpt:
      "Everything you need to know about bridging loans, from how they work to when to use them. A comprehensive guide for property investors.",
    category: "Property Finance",
    author: "Finance Team",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
  },
  {
    slug: "development-finance-tips",
    title: "5 Tips for Securing Development Finance",
    excerpt:
      "What lenders look for in development finance applications and how to present your project in the best light.",
    category: "Development",
    author: "Finance Team",
    publishedAt: "2024-01-10",
    readTime: "5 min read",
  },
  {
    slug: "btl-limited-company-guide",
    title: "Should You Buy-to-Let Through a Limited Company?",
    excerpt:
      "The pros and cons of using an SPV for your property investments. Tax considerations and lending implications.",
    category: "Buy-to-Let",
    author: "Finance Team",
    publishedAt: "2024-01-05",
    readTime: "6 min read",
  },
  {
    slug: "asset-finance-explained",
    title: "Asset Finance Explained: Leasing vs Hire Purchase",
    excerpt:
      "Understanding the different types of asset finance and which option might be best for your business.",
    category: "Business Finance",
    author: "Finance Team",
    publishedAt: "2024-01-01",
    readTime: "4 min read",
  },
];

const categories = [
  "All",
  "Property Finance",
  "Development",
  "Buy-to-Let",
  "Business Finance",
  "Market News",
];

export default function InsightsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary via-primary to-[#072820] text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Insights
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Expert guides, market news, and practical advice to help you make
              informed finance decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {placeholderPosts.map((post) => (
              <Card key={post.slug} className="h-full hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-secondary transition-colors">
                    <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors mt-4"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="text-center mt-12 p-8 bg-muted rounded-lg">
            <h3 className="text-xl font-semibold mb-2">More Content Coming Soon</h3>
            <p className="text-muted-foreground">
              We&apos;re working on new articles and guides to help you navigate the
              world of commercial finance. Check back regularly for updates.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
