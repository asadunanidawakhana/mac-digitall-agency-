import { coursesList } from "@/lib/utils";
import CourseDetailClient from "./CourseDetailClient";
import type { Metadata } from "next";

export function generateStaticParams() {
  return coursesList.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = coursesList.find((c) => c.id === slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: course.title,
    description: course.shortDesc,
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CourseDetailClient slug={slug} />;
}
