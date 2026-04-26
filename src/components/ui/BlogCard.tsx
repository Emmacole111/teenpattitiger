import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  date,
  readTime,
  category,
  image,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        {/* Featured image */}
        {image && (
          <div className="relative w-full h-44 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-yellow-400/90 text-black border border-yellow-300/50">
              {category}
            </span>
          </div>
        )}

        <div className="p-5 flex flex-col flex-1">
          {!image && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-yellow-400/15 text-yellow-400 border border-yellow-400/20 self-start mb-3">
              {category}
            </span>
          )}
          <div className="flex items-center gap-3 text-xs text-white/40 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(date).toLocaleDateString("en-PK", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {readTime}
            </span>
          </div>
          <h3 className="font-bold text-white mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors flex-1">
            {title}
          </h3>
          <p className="text-sm text-white/60 line-clamp-2 leading-relaxed mb-4">{excerpt}</p>
          <span className="flex items-center gap-1.5 text-sm font-semibold text-yellow-400 group-hover:gap-2.5 transition-all mt-auto">
            Read More <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </article>
    </Link>
  );
}
