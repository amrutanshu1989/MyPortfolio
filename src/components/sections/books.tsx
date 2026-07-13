import Image from "next/image";
import { BookOpen, Library, BookMarked, ExternalLink } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { books } from "@/data/books";
import type { Book } from "@/types";

interface BookCoverProps {
  book: Book;
}

function BookCover({ book }: BookCoverProps) {
  if (book.coverImage) {
    return (
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-border bg-muted/40">
        <Image
          src={book.coverImage}
          alt={`Cover of ${book.title}`}
          fill
          sizes="(min-width: 1280px) 280px, (min-width: 768px) 33vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[3/4] w-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-muted/40 p-5">
      <div className="flex items-center gap-2 text-muted-foreground">
        <BookOpen className="size-4" />
        <span className="text-[10px] uppercase tracking-[0.15em]">Cover</span>
      </div>
      <p className="line-clamp-4 break-words text-sm font-semibold leading-snug tracking-tight text-foreground/80">
        {book.title}
      </p>
    </div>
  );
}

interface BookCardProps {
  book: Book;
}

function BookCard({ book }: BookCardProps) {
  return (
    <Card className="group h-full flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25">
      <div className="p-4 pb-0">
        <BookCover book={book} />
      </div>
      <CardContent className="flex flex-1 flex-col gap-2 p-4 pt-4">
        <h3 className="line-clamp-2 break-words text-sm font-semibold leading-snug tracking-tight text-foreground">
          {book.title}
        </h3>
        <p className="line-clamp-2 break-words text-xs leading-relaxed text-muted-foreground">
          {book.authors}
        </p>
        <p className="text-xs italic text-muted-foreground/90">
          {book.publisher} &middot; {book.year}
        </p>
        {book.isbn && (
          <p className="text-xs text-muted-foreground/80">
            ISBN {book.isbn}
          </p>
        )}
        {book.description && (
          <p className="line-clamp-3 break-words text-xs leading-relaxed text-muted-foreground/80">
            {book.description}
          </p>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {book.link ? (
          <Button asChild size="sm" variant="outline" className="mt-auto w-full">
            <a href={book.link} target="_blank" rel="noopener noreferrer">
              View book
              <ExternalLink className="size-3.5" />
            </a>
          </Button>
        ) : (
          <span className="mt-auto w-full text-center text-xs text-muted-foreground/60">
            {book.year}
          </span>
        )}
      </CardFooter>
    </Card>
  );
}

interface BookSubsectionProps {
  label: string;
  icon: typeof Library;
  items: Book[];
  variant?: "card" | "compact";
}

function BookSubsection({ label, icon: Icon, items, variant = "card" }: BookSubsectionProps) {
  if (variant === "compact") {
    return (
      <div>
        <div className="mb-4 flex items-center gap-2 text-sm font-medium text-foreground">
          <Icon className="size-4 text-link" />
          {label}
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.04} className="h-full">
              <article className="flex h-full flex-col gap-1.5 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25">
                <h3 className="line-clamp-2 break-words text-sm font-semibold leading-snug tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="line-clamp-2 break-words text-xs text-muted-foreground">
                  {item.authors}
                </p>
                <p className="mt-auto text-xs italic text-muted-foreground/90">
                  {item.publisher} &middot; {item.year}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center gap-2 text-sm font-medium text-foreground">
        <Icon className="size-4 text-link" />
        {label}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((book, i) => (
          <Reveal key={book.id} delay={i * 0.05} className="h-full">
            <BookCard book={book} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function Books() {
  const authored = books.filter((b) => b.kind === "authored");
  const edited = books.filter((b) => b.kind === "edited");
  const chapters = books.filter((b) => b.kind === "chapter");

  return (
    <SectionWrapper
      id="books"
      className="bg-muted/30"
      containerClassName="max-w-7xl px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Books & Chapters"
        title="Books & book chapters"
        description="Authored and edited volumes alongside peer-reviewed book chapters in blockchain, AI, IoT, and healthcare computing."
      />

      <div className="mt-10 flex flex-col gap-14">
        <BookSubsection
          label="Authored Books"
          icon={Library}
          items={authored}
        />
        <BookSubsection
          label="Edited Books"
          icon={BookOpen}
          items={edited}
        />
        <BookSubsection
          label="Book Chapters"
          icon={BookMarked}
          items={chapters}
          variant="compact"
        />
      </div>
    </SectionWrapper>
  );
}
