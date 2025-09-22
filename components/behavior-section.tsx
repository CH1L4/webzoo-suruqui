import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Sun, Moon, Users } from "lucide-react"

export function BehaviorSection() {
  const behaviors = [
    {
      icon: <Sun className="h-8 w-8 text-primary" />,
      title: "Atividade Diurna",
      description: "Mais ativa durante o dia, especialmente nas primeiras horas da manhã e final da tarde.",
      details: "Aproveita o calor solar para termorregulação e caça.",
    },
    {
      icon: <Moon className="h-8 w-8 text-primary" />,
      title: "Comportamento Noturno",
      description: "Durante a noite, busca abrigo em tocas ou entre a vegetação densa.",
      details: "Reduz atividade metabólica para conservar energia.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Vida Solitária",
      description: "Geralmente solitária, exceto durante o período reprodutivo.",
      details: "Territórios podem se sobrepor sem conflito direto.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Reprodução",
      description: "Ovovivípara, dando à luz filhotes já formados após gestação de 6-7 meses.",
      details: "Pode ter de 4 a 82 filhotes por ninhada.",
    },
  ]

  const seasonalBehavior = [
    {
      season: "Estação Seca (Maio - Setembro)",
      behavior: "Concentra-se em corpos d'água permanentes, aumenta atividade de caça",
      adaptations: ["Maior concentração de presas", "Competição reduzida", "Facilita acasalamento"],
    },
    {
      season: "Estação Chuvosa (Outubro - Abril)",
      behavior: "Dispersa-se por áreas alagadas, reduz atividade devido à abundância de água",
      adaptations: ["Território expandido", "Presas mais dispersas", "Período reprodutivo"],
    },
  ]

  const defensiveBehaviors = [
    "Permanece imóvel quando ameaçada (camuflagem)",
    "Mergulha rapidamente para escapar de predadores",
    "Pode inflar o corpo para parecer maior",
    "Emite sons sibilantes quando acuada",
    "Usa constrição como último recurso de defesa",
  ]

  return (
    <section id="behavior" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Comportamento
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-balance">Vida e Comportamento</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Entenda os padrões comportamentais únicos da sucuri amarela, desde seus hábitos diários até suas estratégias
            de sobrevivência e reprodução.
          </p>
        </div>

        {/* Main Behaviors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {behaviors.map((behavior, index) => (
            <Card key={index} className="hover-scale border-border bg-card">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">{behavior.icon}</div>
                  <CardTitle className="text-2xl text-card-foreground">{behavior.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-4 leading-relaxed">{behavior.description}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{behavior.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seasonal Behavior */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {seasonalBehavior.map((season, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">{season.season}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-4 leading-relaxed">{season.behavior}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-card-foreground text-sm">Adaptações:</h4>
                  {season.adaptations.map((adaptation, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground text-sm">{adaptation}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Defensive Behaviors and Reproduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Comportamentos Defensivos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {defensiveBehaviors.map((behavior, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-xs">{index + 1}</span>
                    </div>
                    <span className="text-card-foreground text-sm leading-relaxed">{behavior}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Ciclo Reprodutivo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Maturidade Sexual</h4>
                  <p className="text-muted-foreground text-sm">Atingida entre 3-4 anos de idade</p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Período de Acasalamento</h4>
                  <p className="text-muted-foreground text-sm">Abril a maio (final da estação chuvosa)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Gestação</h4>
                  <p className="text-muted-foreground text-sm">6-7 meses (ovovivípara)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Filhotes</h4>
                  <p className="text-muted-foreground text-sm">4-82 filhotes por ninhada, nascendo com 30-40cm</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
