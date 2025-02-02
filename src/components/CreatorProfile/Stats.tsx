import { CountUpAnimation } from "@/components/ui/countup";

type StatsProps = {
  averageFee?: number;
  averageCPV?: number;
  predictedFee?: number;
  predictedCPV?: number;
};

type StatsCardProps = {
  label: string;
  value: string | number;
};

export function StatsCard({ label, value }: StatsCardProps) {
  const isNumber = typeof value === "number" || !isNaN(Number(value));
  const formattedValue = isNumber
    ? Number(value).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : value;

  return (
    <div className="bg-black/[0.3] gap-2 rounded-3xl flex flex-col items-center p-3 min-w-[200px] border border-white/[0.1]">
      <div className="text-sm text-gray-400">{label}</div>
      <div className="text-3xl">
        {isNumber ? (
          <CountUpAnimation value={Number(value)} prefix={"$"} />
        ) : (
          formattedValue
        )}
      </div>
    </div>
  );
}

export function Stats({
  averageFee,
  averageCPV,
  predictedFee,
  predictedCPV,
}: StatsProps) {
  return (
    <div className="flex gap-8 flex-wrap justify-center">
      <StatsCard label="Average Kyra fee" value={averageFee || "—"} />
      <StatsCard label="Average Kyra CPV" value={averageCPV || "—"} />
      <StatsCard label="Predicted fee" value={predictedFee || "—"} />
      <StatsCard label="Predicted CPV" value={predictedCPV || "—"} />
    </div>
  );
}
