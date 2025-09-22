"use client"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Heart, Globe, Mail } from "lucide-react"

export function Footer() {
  const resources = [
    { name: "IUCN Red List", url: "#" },
    { name: "CITES", url: "#" },
    { name: "Pantanal Research", url: "#" },
    { name: "Wildlife Conservation", url: "#" },
  ]

  const topics = [
    { name: "Características", id: "characteristics" },
    { name: "Habitat", id: "habitat" },
    { name: "Alimentação", id: "feeding" },
    { name: "Comportamento", id: "behavior" },
    { name: "Conservação", id: "conservation" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">🐍</span>
              </div>
              <span className="font-bold text-xl gradient-text">Sucuri Amarela</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-md">
              Um recurso educativo completo sobre a <em>Eunectes notaeus</em>, dedicado à compreensão e conservação
              desta magnífica serpente sul-americana.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 text-primary" />
              <span>Feito com dedicação à educação ambiental</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Navegação</h3>
            <div className="space-y-2">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => scrollToSection(topic.id)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  {topic.name}
                </button>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Recursos</h3>
            <div className="space-y-2">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  {resource.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-xs">
              <Globe className="h-3 w-3 mr-1" />
              Educação Ambiental
            </Badge>
            <Badge variant="outline" className="text-xs">
              <Mail className="h-3 w-3 mr-1" />
              Conservação
            </Badge>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">© 2024 Sucuri Amarela Educational Project</p>
            <p className="text-muted-foreground text-xs mt-1">Informações baseadas em pesquisas científicas atuais</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
