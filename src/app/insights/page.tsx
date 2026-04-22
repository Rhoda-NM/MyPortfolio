import React from "react";
import Navbar from "@/components/Navbar";

export default function BlogPage() {
  const featuredPost = {
    category: "System Design",
    title: "Designing for Failure: Why Great Systems Don’t Try to Prevent Failure",
    excerpt:
      "A deep dive into single points of failure, blast radius, redundancy, and the trade-offs that define resilient distributed systems.",
    date: "April 2026",
    readTime: "9 min read",
  };

  const posts = [
    {
      category: "System Design",
      title: "Your App Isn’t Slow — Your Architecture Is",
      excerpt:
        "Performance problems rarely begin in the UI. They begin in the decisions underneath it.",
      date: "April 2026",
      readTime: "6 min read",
    },
    {
      category: "Infrastructure",
      title: "Why Redundancy Creates New Problems",
      excerpt:
        "Removing a single point of failure often introduces coordination, consistency, and failover complexity.",
      date: "April 2026",
      readTime: "7 min read",
    },
    {
      category: "Real-Time Systems",
      title: "What Most Developers Miss About Streaming Architecture",
      excerpt:
        "Low-latency delivery is not one tool. It is a pipeline of responsibilities that must work together under pressure.",
      date: "April 2026",
      readTime: "8 min read",
    },
    {
      category: "Product Systems",
      title: "Why Internal Systems Matter More Than Frontends",
      excerpt:
        "The real leverage in software often lives behind the interface — in operations, visibility, and workflow design.",
      date: "April 2026",
      readTime: "5 min read",
    },
    {
      category: "Architecture",
      title: "Building Systems That Hold Under Real Conditions",
      excerpt:
        "The difference between software that demos well and software that survives is almost always architectural.",
      date: "April 2026",
      readTime: "7 min read",
    },
    {
      category: "Engineering Thinking",
      title: "The Cost of Simplicity in Distributed Systems",
      excerpt:
        "What looks simple from the outside is often hiding complexity somewhere deeper in the stack.",
      date: "April 2026",
      readTime: "6 min read",
    },
  ];

  const categories = [
    "All",
    "System Design",
    "Infrastructure",
    "Real-Time Systems",
    "Architecture",
    "Engineering Thinking",
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white selection:bg-[#7B2CBF]/30 selection:text-white">
        <section className="relative overflow-hidden border-b border-white/10 px-6 pb-20 pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.12),transparent_35%),radial-gradient(circle_at_70%_20%,rgba(236,72,153,0.10),transparent_25%)]" />
          <div className="relative mx-auto max-w-7xl pt-10">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                Insights
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
                Technical writing for people building serious systems.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Essays, breakdowns, and architectural thinking on system design,
                infrastructure, performance, and the engineering decisions that determine
                whether software merely works — or actually holds.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 px-6 py-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] sm:p-10 cursor-pointer">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(244,63,94,0.10),transparent_30%)] opacity-60" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                  Featured Essay
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-white/45">
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                    {featuredPost.category}
                  </span>
                  <span>{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2 className="mt-8 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors duration-300 group-hover:text-white">
                  Read article
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </article>

            <aside className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                Categories
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-wide text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="mt-10 border-t border-white/10 pt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                  What to expect
                </p>
                <div className="mt-5 space-y-4 text-sm leading-7 text-white/65">
                  <p>
                    System design insights grounded in real engineering constraints.
                  </p>
                  <p>
                    Technical deep dives that explain not just what works, but why.
                  </p>
                  <p>
                    Articles designed to help founders, operators, and engineers think more clearly about scale.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                Latest Writing
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Essays on architecture, resilience, and systems that endure.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/65">
                A curated archive of writing for people who care about how software behaves under real conditions.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.title}
                  className="group rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] cursor-pointer"
                >
                  <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-white/45">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-white/70 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/85">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-white">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-white/68">
                    {post.excerpt}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/60 transition-colors duration-300 group-hover:text-white">
                    Read article
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm text-white/60">
              Want architecture thinking like this applied to your product?
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let’s build systems with more clarity, performance, and leverage.
            </h2>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-opacity duration-300 hover:opacity-80 cursor-pointer">
              Start a project
              <span>→</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
