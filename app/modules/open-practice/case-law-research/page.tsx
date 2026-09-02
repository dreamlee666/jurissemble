import type { Metadata } from "next";
import { ModuleDetail } from "../../../components/ModuleDetail";
import { legalModules } from "../../../data/modules";

const moduleData = legalModules[1];
export const metadata: Metadata = { title: `${moduleData.title} · 法律模块`, description: moduleData.description, openGraph: { images: [] }, twitter: { images: [] } };
export default function CaseLawResearchPage() { return <ModuleDetail module={moduleData} />; }
