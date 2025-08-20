import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    slug: "diagnostico-precoce-cancer-pancreas",
    title: "Diagnóstico Precoce do Câncer de Pâncreas: Por que é Importante?",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "15 de Março, 2024",
    readTime: "5 min de leitura",
    category: "Diagnóstico",
  },
  {
    id: 2,
    slug: "cirurgia-robotica-pancreas",
    title: "Cirurgia Robótica no Tratamento de Doenças Pancreáticas",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "12 de Março, 2024",
    readTime: "7 min de leitura",
    category: "Cirurgia",
  },
  {
    id: 3,
    slug: "nutricao-pacientes-pancreaticos",
    title: "Nutrição Especializada para Pacientes com Doenças Pancreáticas",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "10 de Março, 2024",
    readTime: "6 min de leitura",
    category: "Nutrição",
  },
  {
    id: 4,
    slug: "equipe-multidisciplinar-pancreas",
    title: "A Importância da Equipe Multidisciplinar no Tratamento Pancreático",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "8 de Março, 2024",
    readTime: "8 min de leitura",
    category: "Equipe",
  },
  {
    id: 5,
    slug: "tecnologia-imagem-pancreas",
    title: "Tecnologias Avançadas de Imagem no Diagnóstico Pancreático",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "5 de Março, 2024",
    readTime: "4 min de leitura",
    category: "Tecnologia",
  },
  {
    id: 6,
    slug: "prevencao-doencas-pancreaticas",
    title: "Prevenção e Fatores de Risco das Doenças Pancreáticas",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "3 de Março, 2024",
    readTime: "6 min de leitura",
    category: "Prevenção",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-purple-950 pt-20">
      <Navbar />
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blog
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Artigos e informações sobre doenças pancreáticas, tratamentos e
            inovações médicas
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-300 font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-white/60">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-white text-lg font-semibold line-clamp-2">
                  {post.title}
                </CardTitle>
                <div className="flex items-center text-sm text-white/60">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 mb-6 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
                <Link href={`/blog/${post.slug}`}>
                  <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30">
                    Ler mais
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
