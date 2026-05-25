export type Gender = "male" | "female";
export type ActivityLevel = "sedentary" | "light" | "moderate" | "intense";
export type Goal = "cut" | "maintain" | "bulk";

export interface UserInput {
  gender: Gender;
  age: number;
  heightCm: number;
  weightKg: number;
  activity: ActivityLevel;
  goal: Goal;
}

export interface CalculationResult {
  bmi: number;
  bmiStatus: string;
  bmiStatusKey: "underweight" | "normal" | "overweight" | "obese";
  dailyCalories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
  bmr: number;
  tdee: number;
  healthAdvice: string;
}

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  intense: 1.725,
};

const PROTEIN_PER_KG: Record<Goal, number> = {
  cut: 2,
  maintain: 1.6,
  bulk: 2.2,
};

const FAT_PER_KG = 0.8;

export function calculateBMI(weightKg: number, heightCm: number): number {
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
}

export function getBMIStatus(bmi: number): {
  label: string;
  key: CalculationResult["bmiStatusKey"];
} {
  if (bmi < 18.5) return { label: "偏瘦", key: "underweight" };
  if (bmi < 24) return { label: "正常", key: "normal" };
  if (bmi < 28) return { label: "超重", key: "overweight" };
  return { label: "肥胖", key: "obese" };
}

export function calculateBMR(input: UserInput): number {
  const { gender, weightKg, heightCm, age } = input;
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return gender === "male" ? base + 5 : base - 161;
}

export function calculateTDEE(bmr: number, activity: ActivityLevel): number {
  return Math.round(bmr * ACTIVITY_MULTIPLIERS[activity]);
}

export function calculateTargetCalories(tdee: number, goal: Goal): number {
  if (goal === "cut") return Math.round(tdee - 400);
  if (goal === "bulk") return Math.round(tdee + 300);
  return tdee;
}

export function getHealthAdvice(
  bmiKey: CalculationResult["bmiStatusKey"],
  goal: Goal
): string {
  const bmiAdvice: Record<CalculationResult["bmiStatusKey"], string> = {
    underweight:
      "您的 BMI 偏低，建议在专业指导下逐步增加营养摄入，配合力量训练以健康增重。",
    normal:
      "您的 BMI 处于健康范围，保持均衡饮食与规律运动即可维持良好体态。",
    overweight:
      "您的 BMI 略高，建议控制精制碳水与添加糖，增加有氧与力量结合训练。",
    obese:
      "您的 BMI 较高，建议咨询医生或营养师制定渐进式减脂计划，避免极端节食。",
  };

  const goalAdvice: Record<Goal, string> = {
    cut: "减脂期请保证充足蛋白质，维持力量训练以保护肌肉，每日热量缺口不宜过大。",
    maintain: "维持期关注营养均衡与睡眠品质，定期监测体重变化以微调摄入。",
    bulk: "增肌期优先复合碳水与优质蛋白，训练后补充营养，避免过量脏增重。",
  };

  return `${bmiAdvice[bmiKey]} ${goalAdvice[goal]}`;
}

export function calculateAll(input: UserInput): CalculationResult {
  const bmi = calculateBMI(input.weightKg, input.heightCm);
  const { label: bmiStatus, key: bmiStatusKey } = getBMIStatus(bmi);
  const bmr = Math.round(calculateBMR(input));
  const tdee = calculateTDEE(bmr, input.activity);
  const dailyCalories = calculateTargetCalories(tdee, input.goal);

  const proteinG = Math.round(input.weightKg * PROTEIN_PER_KG[input.goal]);
  const fatG = Math.round(input.weightKg * FAT_PER_KG);

  const proteinCal = proteinG * 4;
  const fatCal = fatG * 9;
  const remainingCal = dailyCalories - proteinCal - fatCal;
  const carbsG = Math.max(0, Math.round(remainingCal / 4));

  return {
    bmi: Math.round(bmi * 10) / 10,
    bmiStatus,
    bmiStatusKey,
    dailyCalories,
    proteinG,
    carbsG,
    fatG,
    bmr,
    tdee,
    healthAdvice: getHealthAdvice(bmiStatusKey, input.goal),
  };
}
