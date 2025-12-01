import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign } from "lucide-react";

interface PasseioCardProps {
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  included?: string[];
}

export default function PasseioCard({
  title,
  description,
  duration,
  price,
  image,
  included,
}: PasseioCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <CardHeader className="flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">{duration}</span>
        </div>

        {included && included.length > 0 && (
          <div>
            <h4 className="font-semibold text-sm mb-2">Incluso:</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t pt-4">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">{price}</span>
        </div>
        <Button
          className="w-full sm:w-auto bg-primary hover:bg-primary/90"
          onClick={() => window.open("https://wa.me/5598984659626", "_blank")}
        >
          Consultar
        </Button>
      </CardFooter>
    </Card>
  );
}
