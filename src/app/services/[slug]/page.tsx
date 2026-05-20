import { servicesList } from "@/lib/utils";
import ServiceDetailClient from "./ServiceDetailClient";
import type { Metadata } from "next";

export function generateStaticParams() {
  return servicesList.map((s) => ({ slug: s.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = servicesList.find((s) => s.id === params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  return <ServiceDetailClient slug={params.slug} />;
}
