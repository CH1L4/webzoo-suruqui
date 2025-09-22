import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Fish, Bird, Zap, Clock } from "lucide-react"

export function FeedingSection() {
  const preyTypes = [
    {
      icon: <Fish className="h-8 w-8 text-primary" />,
      title: "Peixes",
      description: "Piranha, dourado, pintado, pacu e outras espécies de peixes de água doce",
      percentage: "40%",
      details: "Principal fonte de alimento, especialmente durante a estação seca",
    },
    {
      icon: <Bird className="h-8 w-8 text-primary" />,
      title: "Aves Aquáticas",
      description: "Garças, patos, marrecos, biguás e outras aves que frequentam áreas alagadas",
      percentage: "30%",
      details: "Capturadas principalmente durante a reprodução e nidificação",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Mamíferos",
      description: "Capivaras jovens, ratões-do-banhado, morcegos e pequenos roedores",
      percentage: "20%",
      details: "Presas maiores são consumidas ocasionalmente por indivíduos adultos",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Outros Répteis",
      description: "Jacarés jovens, tartarugas, lagartos e ocasionalmente outras serpentes",
      percentage: "10%",
      details: "Consumo oportunístico dependendo da disponibilidade",
    },
  ]

  const huntingTechniques = [
    {
      title: "Emboscada Aquática",
      description: "Permanece imóvel na água, camuflada entre a vegetação, aguardando a presa se aproximar.",
    },
    {
      title: "Constrição",
      description: "Envolve a presa com seu corpo poderoso, aplicando pressão até causar asfixia.",
    },
    {
      title: "Detecção Térmica",
      description: "Utiliza órgãos termorreceptores para detectar o calor corporal das presas.",
    },
    {
      title: "Digestão Lenta",
      description: "Pode ficar semanas ou meses sem comer após uma grande refeição.",
    },
  ]

  return (
    <section id="feeding" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Alimentação e Caça
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-balance">Estratégias de Caça</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Descubra como a sucuri amarela utiliza suas habilidades de predador aquático para capturar uma grande
            variedade de presas em seu habitat natural.
          </p>
        </div>

        {/* Diet Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {preyTypes.map((prey, index) => (
            <Card key={index} className="hover-scale border-border bg-card text-center">
              <CardHeader>
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-4 bg-primary/10 rounded-full">{prey.icon}</div>
                  <CardTitle className="text-xl text-card-foreground">{prey.title}</CardTitle>
                  <Badge variant="secondary" className="text-lg font-bold">
                    {prey.percentage}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-3 leading-relaxed">{prey.description}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{prey.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Hunting Techniques */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Técnicas de Caça</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {huntingTechniques.map((technique, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">{technique.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{technique.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Metabolismo e Digestão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground leading-relaxed mb-4">
                  A sucuri amarela possui um metabolismo extremamente eficiente, podendo sobreviver por longos períodos
                  sem se alimentar após uma grande refeição.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Tempo de digestão:</span>
                    <span className="font-semibold text-card-foreground">2-4 semanas</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Jejum máximo:</span>
                    <span className="font-semibold text-card-foreground">6-8 meses</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Eficiência energética:</span>
                    <span className="font-semibold text-card-foreground">95%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Adaptações para Caça</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Mandíbulas flexíveis para engolir presas grandes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Músculos constritores extremamente poderosos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Capacidade de permanecer submersa por até 10 minutos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Visão adaptada para ambientes aquáticos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
