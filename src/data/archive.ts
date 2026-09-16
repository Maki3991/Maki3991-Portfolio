import { readMarkdownCollection } from "@/data/content";

export type ArchiveType = "project" | "experience" | "hackathon" | "creation";

export type ArchiveStatus =
  | "active"
  | "completed"
  | "archived"
  | "paused"
  | "draft";

export type ArchiveVisibility =
  | "public"
  | "public-anonymized"
  | "private";

export type ArchiveEvidenceVisibility =
  | ArchiveVisibility
  | "pending"
  | "public-pending-copy";

export type ArchivePeriod = {
  start: string;
  end?: string;
};

export type ArchiveEvidence = {
  kind:
    | "public-link"
    | "local-file"
    | "screenshot"
    | "source-record"
    | "user-confirmation";
  label: string;
  supports: string;
  url?: string;
  visibility?: ArchiveEvidenceVisibility;
};

export type ArchiveItem = {
  id: string;
  order?: number;
  title: string;
  type: ArchiveType;
  status: ArchiveStatus;
  visibility: ArchiveVisibility;
  period: ArchivePeriod;
  summary: string;
  role: string;
  contributions: string[];
  outcomes: string[];
  evidence: ArchiveEvidence[];
  relatedWorks: string[];
  limitations: string[];
  sources: string[];
};

export type ArchiveItemWithBody = ArchiveItem & {
  body: string;
};

export const archiveItems: ArchiveItemWithBody[] =
  readMarkdownCollection<ArchiveItem>("archive");
