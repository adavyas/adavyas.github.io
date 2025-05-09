import { AsciiArt } from "@/components/ascii-art"
import { Mail, MapPin, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  return (
    <div className="space-y-4">
      <AsciiArt art="contact" />

      <div className="space-y-6">
        <div className="flex flex-col gap-3">
          <a
            href="mailto:adavyasharma@gmail.com"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4 mr-2 text-primary" />
            adavyasharma@gmail.com
          </a>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            San Francisco, CA
          </div>
          <a
            href="https://www.linkedin.com/in/adavya-sharma-6924b0311/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Linkedin className="h-4 w-4 mr-2 text-primary" />
            linkedin.com/in/adavya-sharma
          </a>
          <a
            href="https://github.com/adavyas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4 mr-2 text-primary" />
            github.com/adavyas
          </a>
        </div>
      </div>
    </div>
  )
}
