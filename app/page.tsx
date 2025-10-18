import AppBarChart from "@/components/AppBarChart";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">TEST</div>
      <div className="bg-primary-foreground p-4 rounded-lg">TEST</div>
      <div className="bg-primary-foreground p-4 rounded-lg">TEST</div>
      <div className="bg-primary-foreground p-4 rounded-lg">TEST</div>
      <div className="bg-primary-foreground p-4 rounded-lg">TEST</div>
      <div className="bg-primary-foreground p-4 rounded-lg">TEST</div>
    </div>
  );
}
