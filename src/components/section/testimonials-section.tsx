"use client";

import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import Link from "next/link";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Testimonials</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What people say
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Trusted by founders and teams across DeFi, from community
              management to KOL advisory and ecosystem growth.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.testimonials.map((testimonial) => (
            <TimelineItem
              key={testimonial.title + testimonial.dates}
              className="w-full flex items-start justify-between gap-10"
            >
              <TimelineConnectItem className="flex items-start justify-center">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.title}
                    className="size-10 bg-card z-10 shrink-0 overflow-hidden border rounded-full shadow ring-2 ring-border object-cover flex-none"
                  />
                ) : (
                  <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex items-center justify-center flex-none">
                    <span className="text-xs font-semibold text-muted-foreground">
                      {testimonial.title
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                )}
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                {testimonial.dates && (
                  <time className="text-xs text-muted-foreground">
                    {testimonial.dates}
                  </time>
                )}
                {testimonial.title && (
                  <h3 className="font-semibold leading-none">{testimonial.title}</h3>
                )}
                {testimonial.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word italic">
                    &ldquo;{testimonial.description}&rdquo;
                  </p>
                )}
                {"fullText" in testimonial && testimonial.fullText && (
                  <Accordion type="single" collapsible className="w-full mt-1">
                    <AccordionItem value="full-letter" className="border-none">
                      <AccordionTrigger className="py-1 text-xs font-medium text-foreground hover:no-underline">
                        Read full letter of recommendation
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line pb-0">
                        {testimonial.fullText}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
                {"links" in testimonial &&
                  testimonial.links &&
                  testimonial.links.length > 0 && (
                    <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                      {testimonial.links.map((link, idx) => (
                        <Link
                          href={link.href}
                          key={idx}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                            {link.icon}
                            {link.title}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
