import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Ruler, Weight, Palette, Eye } from "lucide-react"

export function CharacteristicsSection() {
  const characteristics = [
    {
      icon: <Ruler className="h-8 w-8 text-primary" />,
      title: "Tamanho",
      description:
        "Fêmeas podem atingir até 4,6 metros de comprimento, enquanto machos geralmente ficam entre 2,5 a 3 metros.",
      details: "É a segunda maior serpente da América do Sul, perdendo apenas para a sucuri-verde.",
    },
    {
      icon: <Weight className="h-8 w-8 text-primary" />,
      title: "Peso",
      description:
        "Podem pesar entre 25 a 35 kg quando adultas, com fêmeas sendo significativamente maiores que os machos.",
      details: "O peso varia conforme a disponibilidade de alimento e época do ano.",
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Coloração",
      description: "Apresenta coloração amarelo-dourada com manchas escuras circulares ou ovais ao longo do corpo.",
      details: "As manchas podem variar de marrom escuro a preto, proporcionando excelente camuflagem.",
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Características Físicas",
      description: "Olhos e narinas posicionados no topo da cabeça, adaptação para vida semi-aquática.",
      details: "Possuem órgãos termorreceptores que detectam o calor corporal das presas.",
    },
  ]

  return (
    <section id="characteristics" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Características Físicas
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-balance">Anatomia da Sucuri Amarela</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Conheça as impressionantes características físicas que fazem da sucuri amarela uma das serpentes mais
            adaptadas aos ambientes aquáticos da América do Sul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {characteristics.map((char, index) => (
            <Card key={index} className="hover-scale border-border bg-card">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">{char.icon}</div>
                  <CardTitle className="text-2xl text-card-foreground">{char.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-4 leading-relaxed">{char.description}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{char.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visual Comparison */}
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-card-foreground">Comparação de Tamanho</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center space-x-8 py-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-2">
                  <span className="text-primary-foreground font-bold">👤</span>
                </div>
                <p className="text-sm text-muted-foreground">Humano Adulto</p>
                <p className="font-semibold">~1,7m</p>
              </div>
              <div className="text-4xl text-muted-foreground">vs</div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-2">
                  <span className="text-secondary-foreground font-bold">🐍</span>
                </div>
                <p className="text-sm text-muted-foreground">Sucuri Amarela</p>
                <p className="font-semibold">até 4,6m</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
