import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Droplets, Thermometer, Globe } from "lucide-react"

export function HabitatSection() {
  const habitats = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Distribuição Geográfica",
      description:
        "Encontrada principalmente na Bacia do Rio Paraguai, incluindo Pantanal brasileiro, Paraguai, Bolívia e norte da Argentina.",
      image: "/south-america-map-showing-yellow-anaconda-distribu.jpg",
    },
    {
      icon: <Droplets className="h-8 w-8 text-primary" />,
      title: "Ambientes Aquáticos",
      description: "Prefere áreas alagadas, rios de curso lento, lagoas, pântanos e campos inundáveis do Pantanal.",
      image: "/pantanal-wetlands-with-calm-waters-and-vegetation.jpg",
    },
    {
      icon: <Thermometer className="h-8 w-8 text-primary" />,
      title: "Condições Climáticas",
      description: "Adapta-se bem ao clima tropical e subtropical, com temperaturas entre 20°C e 35°C.",
      image: "/tropical-wetland-climate-with-warm-temperatures.jpg",
    },
  ]

  const ecosystemFeatures = [
    "Vegetação aquática abundante",
    "Águas rasas e calmas",
    "Presença de presas como peixes, aves e mamíferos",
    "Áreas de alagamento sazonal",
    "Temperatura da água estável",
    "Baixa correnteza",
  ]

  return (
    <section id="habitat" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Habitat Natural
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-balance">Onde Vive a Sucuri Amarela</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Explore os diversos ambientes aquáticos onde a sucuri amarela prospera, desde os vastos pântanos do Pantanal
            até os rios tranquilos da América do Sul.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {habitats.map((habitat, index) => (
            <Card key={index} className="hover-scale border-border bg-card overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={habitat.image || "/placeholder.svg"}
                  alt={habitat.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">{habitat.icon}</div>
                  <CardTitle className="text-xl text-card-foreground">{habitat.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground leading-relaxed">{habitat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ecosystem Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground flex items-center">
                <MapPin className="h-6 w-6 text-primary mr-2" />
                Características do Ecossistema
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ecosystemFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Importância Ecológica</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-card-foreground leading-relaxed mb-4">
                A sucuri amarela desempenha um papel crucial como predador de topo nos ecossistemas aquáticos,
                controlando populações de peixes, aves aquáticas e pequenos mamíferos.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sua presença indica a saúde do ecossistema aquático, sendo considerada uma espécie indicadora da
                qualidade ambiental dos pântanos e áreas alagáveis.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
