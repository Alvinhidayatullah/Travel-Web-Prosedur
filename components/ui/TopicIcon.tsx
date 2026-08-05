import { Plane, Baby, BookOpen, Globe, FileText } from "lucide-react"

export function TopicIcon({ name, className }: { name: string, className?: string }) {
  switch (name) {
    case 'plane':
      return <Plane className={className} />
    case 'baby':
      return <Baby className={className} />
    case 'book':
      return <BookOpen className={className} />
    case 'globe':
      return <Globe className={className} />
    default:
      return <FileText className={className} />
  }
}
