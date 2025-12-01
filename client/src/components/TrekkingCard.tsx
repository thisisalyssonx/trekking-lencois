import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users, TrendingUp } from "lucide-react";

interface TrekkingCardProps {
  title: string;
  days: string;
  distance: string;
  image: string;
  highlights: string[];
  priceFrom: string;
  route: string;
}

export default function TrekkingCard({
  title,
  days,
  distance,
  image,
  highlights,
  priceFrom,
  route,
}: TrekkingCardProps) {
 

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
        </div>
      </div>

      <CardHeader>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{days}</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            <span>{distance}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Percurso
            </h4>
            <p className="text-sm text-muted-foreground">{route}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Destaques</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t pt-4">
        <div>
          <div className="text-sm text-muted-foreground mb-1">A partir de</div>
          <div className="text-2xl font-bold text-primary">{priceFrom}</div>
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>Preço por pessoa (grupo 5-8)</span>
          </div>
        </div>
        <Button
          className="w-full sm:w-auto bg-primary hover:bg-primary/90"
          onClick={() => window.open("https://wa.me/5598984659626", "_blank")}
        >
          Reservar
        </Button>
      </CardFooter>
    </Card>
  );
}
