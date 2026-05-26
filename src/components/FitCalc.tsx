"use client";

import { useState } from "react";
import {
  Activity,
  Apple,
  Beef,
  Calculator,
  Flame,
  Heart,
  Scale,
  Target,
  Wheat,
  Zap,
} from "lucide-react";
import ActivityLevelGuide from "@/components/ActivityLevelGuide";
import FoodReferenceTable from "@/components/FoodReferenceTable";
import ScienceExplanation from "@/components/ScienceExplanation";
import {
  calculateAll,
  type ActivityLevel,
  type CalculationResult,
  type Gender,
  type Goal,
  type UserInput,
} from "@/lib/calculations";

const ACTIVITY_OPTIONS: { value: ActivityLevel; label: string }[] = [
  { value: "sedentary", label: "久坐" },
  { value: "light", label: "轻度活动" },
  { value: "moderate", label: "中度活动" },
  { value: "intense", label: "高强度活动" },
];

const GOAL_OPTIONS: { value: Goal; label: string }[] = [
  { value: "cut", label: "减脂" },
  { value: "maintain", label: "维持" },
  { value: "bulk", label: "增肌" },
];

const BMI_STATUS_COLORS: Record<
  CalculationResult["bmiStatusKey"],
  string
> = {
  underweight: "text-sky-400 bg-sky-400/10 border-sky-400/30",
  normal: "text-accent bg-accent/10 border-accent/30",
  overweight: "text-amber-400 bg-amber-400/10 border-amber-400/30",
  obese: "text-rose-400 bg-rose-400/10 border-rose-400/30",
};

function OptionGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-400">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
              value === opt.value
                ? "border-accent/50 bg-accent/15 text-accent shadow-glow"
                : "border-surface-border bg-surface-raised text-gray-400 hover:border-gray-500 hover:text-gray-200"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
  placeholder,
  min,
  max,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  min?: number;
  max?: number;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-400">
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        min={min}
        max={max}
        className="w-full rounded-lg border border-surface-border bg-surface-raised px-4 py-3 text-gray-100 placeholder-gray-600 transition-all duration-200 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}

function ResultCard({
  icon: Icon,
  label,
  value,
  unit,
  sub,
  delayClass,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  unit?: string;
  sub?: string;
  delayClass?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-surface-border bg-surface-card p-5 shadow-card transition-all duration-300 hover:shadow-card-hover opacity-0 animate-slide-up ${delayClass ?? ""}`}
    >
      <div className="mb-3 flex items-center gap-2 text-gray-400">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
          <Icon className="h-4 w-4 text-accent" />
        </div>
        <span className="text-sm font-medium">{label}</span>
      </div>
      <p className="font-mono text-3xl font-bold tracking-tight text-white">
        {value}
        {unit && (
          <span className="ml-1 text-lg font-normal text-gray-500">{unit}</span>
        )}
      </p>
      {sub && <p className="mt-1 text-xs text-gray-500">{sub}</p>}
    </div>
  );
}

export default function FitCalc() {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState<ActivityLevel>("moderate");
  const [goal, setGoal] = useState<Goal>("maintain");
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState("");

  function handleCalculate() {
    const ageNum = parseInt(age, 10);
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (!age || !height || !weight) {
      setError("请填写年龄、身高和体重");
      setResult(null);
      return;
    }
    if (ageNum < 10 || ageNum > 100) {
      setError("年龄请在 10–100 岁之间");
      setResult(null);
      return;
    }
    if (heightNum < 100 || heightNum > 250) {
      setError("身高请在 100–250 cm 之间");
      setResult(null);
      return;
    }
    if (weightNum < 30 || weightNum > 300) {
      setError("体重请在 30–300 kg 之间");
      setResult(null);
      return;
    }

    setError("");
    const input: UserInput = {
      gender,
      age: ageNum,
      heightCm: heightNum,
      weightKg: weightNum,
      activity,
      goal,
    };
    setResult(calculateAll(input));
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-8 text-center opacity-0 animate-fade-in">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent">
          <Zap className="h-4 w-4" />
          <span>智能营养计算</span>
        </div>
        <h1 className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          FitCalc
        </h1>
        <p className="mt-3 text-gray-400 sm:text-lg">
          BMI, Calories & Macro Calculator
        </p>
        <p className="mt-2 text-xs text-gray-500 sm:text-sm">
          基于 Mifflin‑St Jeor 公式与 ACSM 运动营养标准计算
        </p>
      </header>

      <section className="mb-6 rounded-2xl border border-surface-border bg-surface-card/80 p-5 shadow-card backdrop-blur-sm transition-shadow duration-300 hover:shadow-card-hover sm:p-6 opacity-0 animate-slide-up">
        <div className="mb-5 flex items-center gap-2 text-white">
          <Calculator className="h-5 w-5 text-accent" />
          <h2 className="text-lg font-semibold">身体数据</h2>
        </div>

        <div className="space-y-6">
          <OptionGroup
            label="性别"
            options={[
              { value: "male" as Gender, label: "男" },
              { value: "female" as Gender, label: "女" },
            ]}
            value={gender}
            onChange={setGender}
          />

          <div className="grid gap-4 sm:grid-cols-3">
            <NumberField
              label="年龄"
              value={age}
              onChange={setAge}
              placeholder="例如 28"
              min={10}
              max={100}
            />
            <NumberField
              label="身高 (cm)"
              value={height}
              onChange={setHeight}
              placeholder="例如 175"
              min={100}
              max={250}
            />
            <NumberField
              label="体重 (kg)"
              value={weight}
              onChange={setWeight}
              placeholder="例如 70"
              min={30}
              max={300}
            />
          </div>

          <OptionGroup
            label="活动水平"
            options={ACTIVITY_OPTIONS}
            value={activity}
            onChange={setActivity}
          />

          <OptionGroup
            label="目标"
            options={GOAL_OPTIONS}
            value={goal}
            onChange={setGoal}
          />

          {error && (
            <p className="rounded-lg border border-rose-500/30 bg-rose-500/10 px-4 py-2 text-sm text-rose-400">
              {error}
            </p>
          )}

          <button
            type="button"
            onClick={handleCalculate}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-base font-semibold text-surface shadow-glow transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
          >
            <Calculator className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            开始计算
          </button>
        </div>
      </section>

      <ActivityLevelGuide />

      {result && (
        <section
          key={`${result.bmi}-${result.dailyCalories}`}
          className="mb-6 space-y-5 opacity-0 animate-fade-in"
        >
          <div className="flex items-center gap-2 text-white">
            <Target className="h-5 w-5 text-accent" />
            <h2 className="text-lg font-semibold">计算结果</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <ResultCard
              icon={Scale}
              label="BMI"
              value={result.bmi}
              delayClass="stagger-1"
            />
            <div className="rounded-xl border border-surface-border bg-surface-card p-5 shadow-card opacity-0 animate-slide-up stagger-2">
              <div className="mb-3 flex items-center gap-2 text-gray-400">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                  <Heart className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm font-medium">BMI 状态</span>
              </div>
              <span
                className={`inline-flex rounded-lg border px-4 py-2 text-xl font-bold ${BMI_STATUS_COLORS[result.bmiStatusKey]}`}
              >
                {result.bmiStatus}
              </span>
            </div>
            <ResultCard
              icon={Flame}
              label="每日推荐热量"
              value={result.dailyCalories}
              unit="kcal"
              sub={`BMR ${result.bmr} · TDEE ${result.tdee}`}
              delayClass="stagger-3"
            />
            <ResultCard
              icon={Beef}
              label="每日蛋白质"
              value={result.proteinG}
              unit="g"
              sub={`${result.proteinPerKg} g/kg`}
              delayClass="stagger-4"
            />
            <ResultCard
              icon={Wheat}
              label="每日碳水"
              value={result.carbsG}
              unit="g"
              sub={`${result.carbsPerKg} g/kg`}
              delayClass="stagger-5"
            />
            <ResultCard
              icon={Apple}
              label="每日脂肪"
              value={result.fatG}
              unit="g"
              sub={`${result.fatPerKg} g/kg`}
              delayClass="stagger-6"
            />
          </div>

          <div className="rounded-xl border border-surface-border bg-surface-card p-5 shadow-card opacity-0 animate-slide-up stagger-6 sm:p-6">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                <Activity className="h-4 w-4 text-accent" />
              </div>
              <h3 className="font-semibold text-white">健康建议</h3>
            </div>
            <p className="leading-relaxed text-gray-400">{result.healthAdvice}</p>
          </div>

          <ScienceExplanation />

          <div className="flex flex-wrap justify-center gap-3 opacity-0 animate-scale-in stagger-6">
            {[
              { label: "蛋白质", g: result.proteinG, cal: result.proteinG * 4, color: "bg-rose-500" },
              { label: "碳水", g: result.carbsG, cal: result.carbsG * 4, color: "bg-amber-500" },
              { label: "脂肪", g: result.fatG, cal: result.fatG * 9, color: "bg-sky-500" },
            ].map((macro) => {
              const total =
                result.proteinG * 4 + result.carbsG * 4 + result.fatG * 9;
              const pct = total > 0 ? Math.round((macro.cal / total) * 100) : 0;
              return (
                <div
                  key={macro.label}
                  className="flex items-center gap-2 rounded-lg border border-surface-border bg-surface-raised px-4 py-2 text-sm"
                >
                  <span className={`h-2 w-2 rounded-full ${macro.color}`} />
                  <span className="text-gray-400">{macro.label}</span>
                  <span className="font-mono font-medium text-white">{pct}%</span>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <FoodReferenceTable />

      <footer className="mt-auto pt-6 text-center text-sm text-gray-600">
        Built with FitCalc
      </footer>
    </main>
  );
}
