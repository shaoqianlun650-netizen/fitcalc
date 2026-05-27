"use client";

import { useState } from "react";
import { ChevronDown, Salad } from "lucide-react";
import { FOOD_CATEGORIES, type FoodCategory } from "@/data/foodReference";

function formatMacro(value: number): string {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function FoodCategoryCard({ category }: { category: FoodCategory }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-w-0 rounded-xl border border-surface-border bg-surface-raised">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative flex min-h-11 w-full touch-manipulation items-start p-4 pr-12 text-left"
        aria-expanded={open}
      >
        <h3 className="min-w-0 break-words pr-2 text-sm font-bold text-accent">
          {category.title}
          <span className="font-normal text-gray-500">
            （{category.subtitle}）
          </span>
        </h3>
        <ChevronDown
          className={`absolute right-4 top-4 h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="min-w-0 overflow-hidden px-4 pb-4">
          <p className="mb-3 break-words rounded-lg border border-surface-border bg-surface-card px-4 py-3 text-sm leading-relaxed text-gray-100">
            {category.explanation}
          </p>
          <div className="max-w-full overflow-x-auto overscroll-x-contain rounded-xl border border-surface-border">
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="border-b border-surface-border bg-surface-card text-left">
                  <th className="px-4 py-3 font-semibold text-accent">食物</th>
                  <th className="px-4 py-3 text-right font-semibold text-accent">热量 (kcal)</th>
                  <th className="px-4 py-3 text-right font-semibold text-accent">蛋白质 (g)</th>
                  <th className="px-4 py-3 text-right font-semibold text-accent">碳水 (g)</th>
                  <th className="px-4 py-3 text-right font-semibold text-accent">脂肪 (g)</th>
                </tr>
              </thead>
              <tbody>
                {category.items.map((item, index) => (
                  <tr
                    key={item.name}
                    className={
                      index < category.items.length - 1
                        ? "border-b border-surface-border/50"
                        : ""
                    }
                  >
                    <td className="px-4 py-3 font-semibold text-white">{item.name}</td>
                    <td className="px-4 py-3 text-right font-mono text-gray-400">
                      {item.calories}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-gray-400">
                      {formatMacro(item.protein)}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-gray-400">
                      {formatMacro(item.carbs)}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-gray-400">
                      {formatMacro(item.fat)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FoodReferenceTable() {
  return (
    <section className="mb-6 min-w-0 rounded-2xl border border-surface-border bg-surface-card/80 p-4 shadow-card backdrop-blur-sm sm:p-6">
      <div className="mb-2 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-white">
        <Salad className="h-5 w-5 shrink-0 text-accent" />
        <h2 className="text-base font-semibold sm:text-lg">常见食物营养参考</h2>
        <span className="text-sm font-normal text-gray-500">（每 100g 可食部）</span>
      </div>
      <p className="mb-4 break-words text-sm leading-relaxed text-gray-400">
        对照下方数据，直观规划每日三餐摄入量，烹饪用油会额外增加热量。数据来源：《中国食物成分表》
      </p>

      <div className="space-y-3">
        {FOOD_CATEGORIES.map((category) => (
          <FoodCategoryCard key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
}
