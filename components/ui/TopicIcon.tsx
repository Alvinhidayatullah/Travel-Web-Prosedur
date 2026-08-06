import { Plane, Baby, BookOpen, Globe, FileText, Laptop, Users, Briefcase, ShieldAlert, HeartPulse, Landmark, RefreshCw, AlertTriangle, Zap, Building, FileEdit, CreditCard } from "lucide-react"

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
    case 'heart-pulse':
      return <HeartPulse className={className} />
    case 'landmark':
      return <Landmark className={className} />
    case 'refresh-cw':
      return <RefreshCw className={className} />
    case 'alert-triangle':
      return <AlertTriangle className={className} />
    case 'zap':
      return <Zap className={className} />
    case 'building':
      return <Building className={className} />
    case 'file-edit':
      return <FileEdit className={className} />
    case 'credit-card':
      return <CreditCard className={className} />
    default:
      return <FileText className={className} />
  }
}
