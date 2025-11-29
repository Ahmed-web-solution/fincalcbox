// ✅ Centralized Lucide Icon Imports (Optimized per-icon ESM paths)

// Core commonly used icons
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up.js';
import PiggyBank from 'lucide-react/dist/esm/icons/piggy-bank.js';
import Brain from 'lucide-react/dist/esm/icons/brain.js';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right.js';
import Mail from 'lucide-react/dist/esm/icons/mail.js';
import Globe from 'lucide-react/dist/esm/icons/globe.js';
import Calculator from 'lucide-react/dist/esm/icons/calculator.js';
import Calendar from 'lucide-react/dist/esm/icons/calendar.js';
import Receipt from 'lucide-react/dist/esm/icons/receipt.js';
import Sun from 'lucide-react/dist/esm/icons/sun.js';
import Moon from 'lucide-react/dist/esm/icons/moon.js';
import Menu from 'lucide-react/dist/esm/icons/menu.js';
import X from 'lucide-react/dist/esm/icons/x.js';
import Github from 'lucide-react/dist/esm/icons/github.js';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin.js';
import Twitter from 'lucide-react/dist/esm/icons/twitter.js';
import ArrowUp from 'lucide-react/dist/esm/icons/arrow-up.js';
import ArrowLeftRight from 'lucide-react/dist/esm/icons/arrow-left-right.js';
import DollarSign from 'lucide-react/dist/esm/icons/dollar-sign.js';
import Clock from 'lucide-react/dist/esm/icons/clock.js';
import RefreshCw from 'lucide-react/dist/esm/icons/refresh-cw.js';
import Search from 'lucide-react/dist/esm/icons/search.js';
import Filter from 'lucide-react/dist/esm/icons/filter.js';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down.js';

// ✅ Additional icons requested
import Target from 'lucide-react/dist/esm/icons/target.js';
import Users from 'lucide-react/dist/esm/icons/users.js';
import Award from 'lucide-react/dist/esm/icons/award.js';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link.js';
import ArrowLeft from 'lucide-react/dist/esm/icons/arrow-left.js';
import Share2 from 'lucide-react/dist/esm/icons/share-2.js';
import MessageCircle from 'lucide-react/dist/esm/icons/message-circle.js';
import MessageSquare from 'lucide-react/dist/esm/icons/message-square.js';
import User from 'lucide-react/dist/esm/icons/user.js';
import Phone from 'lucide-react/dist/esm/icons/phone.js';
import MapPin from 'lucide-react/dist/esm/icons/map-pin.js';
import FileText from 'lucide-react/dist/esm/icons/file-text.js';
import AlertCircle from 'lucide-react/dist/esm/icons/alert-circle.js';
import AlertTriangle from 'lucide-react/dist/esm/icons/alert-triangle.js';
import Gavel from 'lucide-react/dist/esm/icons/gavel.js';
import Shield from 'lucide-react/dist/esm/icons/shield.js';
import Scale from 'lucide-react/dist/esm/icons/scale.js';
import Eye from 'lucide-react/dist/esm/icons/eye.js';
import Lock from 'lucide-react/dist/esm/icons/lock.js';
import Database from 'lucide-react/dist/esm/icons/database.js';
import UserCheck from 'lucide-react/dist/esm/icons/user-check.js';

// ✅ Export all icons together
export {
  TrendingUp,
  PiggyBank,
  Brain,
  ArrowRight,
  Mail,
  Globe,
  Calculator,
  Calendar,
  Receipt,
  Sun,
  Moon,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  ArrowUp,
  ArrowLeftRight,
  DollarSign,
  Clock,
  RefreshCw,
  Search,
  Filter,
  ChevronDown,
  Target,
  Users,
  Award,
  ExternalLink,
  ArrowLeft,
  Share2,
  MessageCircle,
  MessageSquare,
  User,
  Phone,
  MapPin,
  FileText,
  AlertCircle,
  AlertTriangle,
  Gavel,
  Shield,
  Scale,
  Eye,
  Lock,
  Database,
  UserCheck,
};

// ✅ Optional: Dynamic Lazy Map for Code Splitting (rare use cases)
export const iconMap = {
  Globe: () => import('lucide-react/dist/esm/icons/globe.js'),
  Calculator: () => import('lucide-react/dist/esm/icons/calculator.js'),
  Calendar: () => import('lucide-react/dist/esm/icons/calendar.js'),
  Receipt: () => import('lucide-react/dist/esm/icons/receipt.js'),
  TrendingUp: () => import('lucide-react/dist/esm/icons/trending-up.js'),
  ArrowLeftRight: () => import('lucide-react/dist/esm/icons/arrow-left-right.js'),
  Target: () => import('lucide-react/dist/esm/icons/target.js'),
  Users: () => import('lucide-react/dist/esm/icons/users.js'),
  Award: () => import('lucide-react/dist/esm/icons/award.js'),
  PiggyBank: () => import('lucide-react/dist/esm/icons/piggy-bank.js'),
  DollarSign: () => import('lucide-react/dist/esm/icons/dollar-sign.js'),
  Clock: () => import('lucide-react/dist/esm/icons/clock.js'),
  FileText: () => import('lucide-react/dist/esm/icons/file-text.js'),
} as const;
