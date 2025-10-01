import BuildHeader from "@/components/ui/builds/BuildHeader";
import BuildTable from "@/components/ui/builds/BuildTable";

export default function BuildsPage() {
  return (
    <section className="flex flex-col">
      <BuildHeader />
      <BuildTable />
    </section>
  );
}
