"use client";

import { useState } from "react";
import { ChevronDown, Footprints } from "lucide-react";

const ACTIVITY_LEVELS = [
  {
    label: "久坐",
    coefficient: "1.2",
    description:
      "办公室职员、长期伏案学生，每日步行＜3000 步，几乎无刻意运动，仅日常轻微起身活动。",
  },
  {
    label: "轻度活动",
    coefficient: "1.375",
    description:
      "日常通勤走路较多，每日步行 3000‑6000 步，每周 1‑3 次快走、骑行、瑜伽、羽毛球等低强度运动。",
  },
  {
    label: "中度活动",
    coefficient: "1.55",
    description:
      "规律健身人群，每日步行 6000‑10000 步，每周 3‑5 次力量训练、篮球、长跑、游泳等中等强度运动。",
  },
  {
    label: "高强度活动",
    coefficient: "1.725",
    description:
      "高频训练者、体力劳动者、体育生，每日步行＞10000 步，每周 6‑7 次高强度训练或重体力工作。",
  },
];

export default function ActivityLevelGuide() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mb-6 rounded-2xl border border-surface-border bg-surface-card/80 p-5 shadow-card backdrop-blur-sm sm:p-6">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative flex w-full items-center pr-8 text-left"
        aria-expanded={open}
      >
        <div className="flex items-center gap-2 text-white">
          <Footprints className="h-5 w-5 shrink-0 text-accent" />
          <h2 className="text-lg font-semibold">活动水平选择说明</h2>
        </div>
        <ChevronDown
          className={`absolute right-0 top-0.5 h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <ol className="space-y-3">
            {ACTIVITY_LEVELS.map((level, index) => (
              <li
                key={level.label}
                className="rounded-xl border border-surface-border bg-surface-raised p-4"
              >
                <p className="mb-1.5 text-sm font-medium text-white">
                  <span className="mr-2 text-accent">{index + 1}.</span>
                  {level.label}
                  <span className="ml-2 font-mono text-xs text-gray-500">
                    系数 {level.coefficient}
                  </span>
                </p>
                <p className="text-sm leading-relaxed text-gray-400">
                  {level.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
