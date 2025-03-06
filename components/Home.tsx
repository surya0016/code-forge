"use client"

import Link from "next/link"
import { Code, Award, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-zinc-900 text-zinc-50">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Master Coding Challenges</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Improve your coding skills with our collection of programming challenges, from easy to hard.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="secondary" size="lg">
              <Link href="/problems">Start Coding</Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/learn">Learn Algorithms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose CodeForge?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform is designed to help you become a better programmer through practice and learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Code,
              title: "800+ Problems",
              description: "A vast collection of coding challenges across various difficulty levels and topics.",
              color: "text-zinc-900",
            },
            {
              icon: BookOpen,
              title: "In-depth Solutions",
              description: "Detailed explanations and multiple approaches to solve each problem.",
              color: "text-zinc-900",
            },
            {
              icon: Award,
              title: "Weekly Contests",
              description: "Participate in weekly coding competitions to test your skills against others.",
              color: "text-zinc-900",
            },
            {
              icon: Users,
              title: "Active Community",
              description: "Join discussions, share solutions, and learn from other programmers.",
              color: "text-zinc-900",
            },
          ].map((feature, index) => (
            <Card key={index} className="border-zinc-200">
              <CardHeader>
                <div
                  className={`${feature.color} bg-zinc-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Problem Categories */}
      <section id="categories" className="bg-zinc-100 py-16 dark:bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Problem Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dive into specific topics to strengthen your understanding of algorithms and data structures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Arrays & Strings", count: 120, color: "bg-zinc-700" },
              { name: "Linked Lists", count: 45, color: "bg-zinc-700" },
              { name: "Trees & Graphs", count: 85, color: "bg-zinc-700" },
              { name: "Dynamic Programming", count: 95, color: "bg-zinc-700" },
              { name: "Sorting & Searching", count: 60, color: "bg-zinc-700" },
              { name: "Math & Logic", count: 75, color: "bg-zinc-700" },
            ].map((category, index) => (
              <Card key={index} className="rounded-t-none border-zinc-200 pt-0">
                <div className={`${category.color} h-2`}></div>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground mb-4">{category.count} problems</p>
                  <Button variant="ghost" asChild>
                    <Link href={`/problems?category=${category.name.toLowerCase().replace(/\s+/g, "-")}`}>
                      Explore →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of developers who have improved their coding skills with CodeForge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Alex Johnson",
              role: "Software Engineer at Google",
              quote:
                "CodeForge helped me prepare for my technical interviews. The variety of problems and detailed solutions were invaluable.",
            },
            {
              name: "Sarah Chen",
              role: "Full Stack Developer",
              quote:
                "I love the weekly contests! They keep me motivated and help me improve my problem-solving skills under time pressure.",
            },
            {
              name: "Michael Rodriguez",
              role: "CS Student",
              quote:
                "As a student, CodeForge has been an amazing resource for learning algorithms and data structures through practical problems.",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="border-zinc-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-200 mr-4 flex items-center justify-center">
                    <span className="text-zinc-600 font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-900 text-zinc-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Coding Skills?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our community of developers and start solving problems today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/problems">Start Coding</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-zinc-50 border-zinc-50 hover:bg-zinc-800"
            >
              <Link href="/learn">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

