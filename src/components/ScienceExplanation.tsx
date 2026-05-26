import { BookOpen } from "lucide-react";

const SCIENCE_POINTS = [
  {
    title: "基础代谢（BMR）",
    content:
      "采用目前营养学与健身界精度最高的 Mifflin‑St Jeor 公式，计算人体静息状态最低能量消耗，替代老旧的哈里斯‑本尼迪克特公式。",
  },
  {
    title: "每日总消耗（TDEE）",
    content:
      "结合 ACSM 国际通用活动系数，精准匹配不同生活方式的能量消耗。",
  },
  {
    title: "三大营养素配比",
    content:
      "遵循国际运动营养学会（ISSN）推荐区间，针对减脂、维持、增肌分别设定科学热量占比，并设置碳水 5g/kg 安全上限，避免摄入超标。",
  },
  {
    title: "热量换算标准",
    content: "严格采用营养学固定值，蛋白质、碳水 4 kcal/g，脂肪 9 kcal/g。",
  },
];

export default function ScienceExplanation() {
  return (
    <div className="rounded-xl border border-surface-border bg-surface-card p-5 shadow-card sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
          <BookOpen className="h-4 w-4 text-accent" />
        </div>
        <h3 className="font-semibold text-white">计算依据说明</h3>
      </div>
      <ol className="space-y-4">
        {SCIENCE_POINTS.map((point, index) => (
          <li key={point.title} className="text-sm leading-relaxed">
            <span className="font-medium text-gray-300">
              {index + 1}. {point.title}：
            </span>
            <span className="text-gray-400">{point.content}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
