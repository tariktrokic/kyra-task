"use client";

import CountUp from "react-countup";

export function CountUpAnimation({
  value,
  prefix,
  suffix,
  decimals = 2,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  return (
    <CountUp
      end={value}
      duration={3}
      decimals={decimals}
      prefix={prefix}
      suffix={suffix}
      start={0}
    />
  );
}
