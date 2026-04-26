import { User, Calendar, RefreshCw } from "lucide-react";

interface AuthorBoxProps {
  author: string;
  role: string;
  date: string;
  readTime: string;
}

export default function AuthorBox({ author, role, date, readTime }: AuthorBoxProps) {
  return (
    <div className="glass-card rounded-2xl border border-white/10 p-5 flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0">
        <User className="w-6 h-6 text-black" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-bold text-white text-sm">{author}</div>
        <div className="text-xs text-yellow-400 mb-1">{role}</div>
        <div className="flex items-center gap-3 text-xs text-white/40">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(date).toLocaleDateString("en-PK", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <RefreshCw className="w-3 h-3" />
            {readTime}
          </span>
        </div>
      </div>
    </div>
  );
}
