"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Carlos Mendoza",
    location: "Lima",
    image:
      "https://images.unsplash.com/photo-1736194689767-9e3c4e7bd7f6?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "El servicio superó todas mis expectativas. Los autos están impecables y el proceso de alquiler es muy sencillo. Definitivamente volveré a usar sus servicios.",
    initials: "CM",
  },
  {
    name: "Ana Torres",
    location: "Lima",
    image:
      "https://images.unsplash.com/photo-1736779491981-654894ba27e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Excelente atención y vehículos de primera calidad. Los precios son muy competitivos y el equipo siempre está dispuesto a ayudar.",
    initials: "AT",
  },
  {
    name: "Miguel Ruiz",
    location: "Lima",
    image:
      "https://images.unsplash.com/photo-1734824898400-4647e1ce97a1?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "La mejor experiencia de alquiler que he tenido. Los autos están en perfectas condiciones y el servicio al cliente es excepcional.",
    initials: "MR",
  },
];

const partners = [
  {
    name: "Honda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/1920px-Honda.svg.png",
  },
  {
    name: "Kia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/KIA_logo3.svg/1920px-KIA_logo3.svg.png",
  },
  {
    name: "Volkswagen",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/1024px-Volkswagen_logo_2019.svg.png",
  },
  {
    name: "Audi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/799px-Audi-Logo_2016.svg.png",
  },
  {
    name: "Toyota",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Toyota.svg/1920px-Toyota.svg.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre por qué nuestros clientes confían en nosotros para sus
            necesidades de transporte
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <p className="flex-grow text-muted-foreground mb-6">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="pt-8 border-t">
          <p className="text-center text-muted-foreground mb-8">
            Trabajamos con las mejores marcas del mercado
          </p>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16 dark:bg-gray-300 py-4 rounded-sm"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="w-24 h-12 relative grayscale hover:grayscale-0 transition-all duration-300 "
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain w-full h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
