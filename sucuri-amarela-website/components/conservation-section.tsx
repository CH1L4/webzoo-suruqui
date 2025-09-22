import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Shield, Leaf, ExternalLink } from "lucide-react"

export function ConservationSection() {
  const threats = [
    {
      icon: <AlertTriangle className="h-6 w-6 text-destructive" />,
      title: "Perda de Habitat",
      description: "Drenagem de áreas alagadas para agricultura e pecuária",
      severity: "Alto",
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-destructive" />,
      title: "Poluição da Água",
      description: "Contaminação por agrotóxicos e efluentes urbanos",
      severity: "Médio",
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-destructive" />,
      title: "Caça Ilegal",
      description: "Captura para comércio de peles e medicina tradicional",
      severity: "Médio",
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-destructive" />,
      title: "Mudanças Climáticas",
      description: "Alterações nos padrões de chuva e temperatura",
      severity: "Crescente",
    },
  ]

  const conservationActions = [
    "Criação e manutenção de áreas protegidas",
    "Monitoramento populacional através de telemetria",
    "Educação ambiental para comunidades locais",
    "Regulamentação do uso da terra em áreas críticas",
    "Pesquisa científica sobre ecologia e comportamento",
    "Programas de reprodução em cativeiro",
  ]

  const protectedAreas = [
    {
      name: "Parque Nacional do Pantanal",
      location: "Mato Grosso, Brasil",
      area: "135.000 hectares",
    },
    {
      name: "Reserva da Biosfera do Pantanal",
      location: "Brasil, Bolívia, Paraguai",
      area: "25 milhões de hectares",
    },
    {
      name: "Parque Nacional Defensores del Chaco",
      location: "Paraguai",
      area: "780.000 hectares",
    },
  ]

  return (
    <section id="conservation" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Conservação
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-balance">Proteção e Conservação</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Conheça os desafios enfrentados pela sucuri amarela e os esforços de conservação necessários para garantir a
            sobrevivência desta espécie única.
          </p>
        </div>

        {/* Conservation Status */}
        <Card className="mb-16 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl text-card-foreground flex items-center">
              <Shield className="h-6 w-6 text-primary mr-2" />
              Status de Conservação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Badge variant="secondary" className="mb-2 text-lg px-4 py-2">
                  IUCN: LC
                </Badge>
                <p className="text-sm text-muted-foreground">Pouco Preocupante</p>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="mb-2 text-lg px-4 py-2 border-primary text-primary">
                  CITES: II
                </Badge>
                <p className="text-sm text-muted-foreground">Comércio Controlado</p>
              </div>
              <div className="text-center">
                <Badge variant="destructive" className="mb-2 text-lg px-4 py-2">
                  Tendência: ↓
                </Badge>
                <p className="text-sm text-muted-foreground">População Declinante</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Threats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Principais Ameaças</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {threats.map((threat, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                    <div className="flex-shrink-0 mt-1">{threat.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-card-foreground">{threat.title}</h4>
                        <Badge variant={threat.severity === "Alto" ? "destructive" : "secondary"} className="text-xs">
                          {threat.severity}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">{threat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground flex items-center">
                <Leaf className="h-6 w-6 text-primary mr-2" />
                Ações de Conservação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {conservationActions.map((action, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-xs">{index + 1}</span>
                    </div>
                    <span className="text-card-foreground text-sm leading-relaxed">{action}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Protected Areas */}
        <Card className="mb-16 bg-card border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-card-foreground">Áreas Protegidas Importantes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {protectedAreas.map((area, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/30 hover-scale">
                  <h4 className="font-semibold text-card-foreground mb-2">{area.name}</h4>
                  <p className="text-muted-foreground text-sm mb-1">{area.location}</p>
                  <p className="text-primary font-semibold text-sm">{area.area}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30 text-center">
          <CardHeader>
            <CardTitle className="text-2xl text-card-foreground">Como Você Pode Ajudar</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-card-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
              A conservação da sucuri amarela depende do esforço conjunto de pesquisadores, governos e sociedade civil.
              Cada ação conta para preservar esta espécie única.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Apoiar ONGs Ambientais
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
                Saiba Mais sobre Conservação
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
