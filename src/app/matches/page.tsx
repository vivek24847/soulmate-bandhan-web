import MatchesClient from "@/components/matches/MatchesClient";
import { getDiscover } from "../actions/matches";

export default async function MatchesPage() {
  const result = await getDiscover();

  const profiles = result.success ? result.data || [] : [];

  return <MatchesClient profiles={profiles} />;
}