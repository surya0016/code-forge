import Link from "next/link"
import { Code } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between ml-8 gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6" />
          <p className="text-sm leading-loose text-center md:text-left">
            &copy; {new Date().getFullYear()} CodeForge. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
            Terms
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
            Privacy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  )
}

