import { Plane, Baby, BookOpen, Globe, FileText, Laptop, Users, Briefcase, ShieldAlert } from "lucide-react"

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
    case 'laptop':
      return <Laptop className={className} />
    case 'users':
      return <Users className={className} />
    case 'briefcase':
      return <Briefcase className={className} />
    case 'shield-alert':
      return <ShieldAlert className={className} />
    default:
      return <FileText className={className} />
  }
}
