import { servicesList } from "@/lib/utils";
import ServiceDetailClient from "./ServiceDetailClient";
import type { Metadata } from "next";

export function generateStaticParams() {
  return servicesList.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesList.find((s) => s.id === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServiceDetailClient slug={slug} />;
}
