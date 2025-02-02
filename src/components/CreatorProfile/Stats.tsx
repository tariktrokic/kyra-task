type StatsCardProps = {
  label: string;
  value: string | number;
};

function StatsCard({ label, value }: StatsCardProps) {
  return (
    <div className="bg-black/[0.3] gap-2 rounded-3xl flex flex-col items-center p-3 min-w-[200px] border border-white/[0.1]">
      <div className="text-sm text-gray-400">{label}</div>
      <div className="text-3xl">{value}</div>
    </div>
  );
}

type StatsProps = {
  averageFee?: number;
  averageCPV?: number;
  predictedFee?: number;
  predictedCPV?: number;
};

export function Stats({
  averageFee,
  averageCPV,
  predictedFee,
  predictedCPV,
}: StatsProps) {
  return (
    <div className="flex gap-8 flex-wrap justify-center">
      <StatsCard
        label="Average Kyra fee"
        value={
          averageFee?.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }) || "—"
        }
      />
      <StatsCard
        label="Average Kyra CPV"
        value={
          averageCPV?.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }) || "—"
        }
      />
      <StatsCard
        label="Predicted fee"
        value={`$${
          predictedFee?.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }) || "—"
        }`}
      />
      <StatsCard
        label="Predicted CPV"
        value={`$${
          predictedCPV?.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }) || "—"
        }`}
      />
    </div>
  );
}
