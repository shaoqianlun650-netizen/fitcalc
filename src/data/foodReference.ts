export interface FoodItem {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface FoodCategory {
  title: string;
  subtitle: string;
  explanation: string;
  items: FoodItem[];
}

export const FOOD_CATEGORIES: FoodCategory[] = [
  {
    title: "主食类",
    subtitle: "碳水主要来源，决定饱腹感和训练状态",
    explanation:
      "100g 熟米饭 ≈ 一个普通拳头大小压实的米饭；干燕麦需要加水煮，煮熟后重量会翻 2~3 倍；红薯、荞麦面属于粗粮，升糖慢，减脂期优先选。",
    items: [
      { name: "熟米饭", calories: 116, protein: 2.6, carbs: 25.9, fat: 0.3 },
      { name: "熟红薯", calories: 90, protein: 1.6, carbs: 20.1, fat: 0.1 },
      { name: "干燕麦片", calories: 389, protein: 15.0, carbs: 66.9, fat: 6.9 },
      { name: "全麦面包", calories: 250, protein: 8.5, carbs: 42.0, fat: 4.0 },
      { name: "干荞麦面", calories: 340, protein: 12.0, carbs: 68.0, fat: 2.5 },
    ],
  },
  {
    title: "高蛋白肉类",
    subtitle: "长肌肉、抗饿主力，减脂期必吃",
    explanation:
      "100g 鸡胸肉 ≈ 成年人手掌心大小、一指厚的一块肉；鸡蛋一个约 50g；豆腐是素食友好蛋白；肉类脂肪越低，越适合减脂期。",
    items: [
      { name: "生鸡胸肉", calories: 118, protein: 23.0, carbs: 0, fat: 2.6 },
      { name: "瘦牛肉", calories: 125, protein: 22.0, carbs: 0, fat: 3.5 },
      { name: "巴沙鱼", calories: 80, protein: 15.0, carbs: 0, fat: 1.8 },
      { name: "全鸡蛋", calories: 143, protein: 12.6, carbs: 1.1, fat: 9.9 },
      { name: "无糖希腊酸奶", calories: 70, protein: 10.0, carbs: 3.0, fat: 1.5 },
      { name: "北豆腐", calories: 85, protein: 8.0, carbs: 3.5, fat: 4.2 },
    ],
  },
  {
    title: "蔬菜类",
    subtitle: "几乎可以随便吃，低卡高纤维，增加饱腹感",
    explanation:
      "热量极低，日常吃饭尽量铺满半盘，不限量吃也不会超标，主要补充膳食纤维和维生素。",
    items: [
      { name: "西兰花", calories: 34, protein: 2.8, carbs: 6.0, fat: 0.4 },
      { name: "菠菜", calories: 28, protein: 2.9, carbs: 4.5, fat: 0.4 },
      { name: "黄瓜", calories: 16, protein: 0.8, carbs: 2.9, fat: 0.2 },
      { name: "番茄", calories: 18, protein: 0.9, carbs: 3.5, fat: 0.2 },
      { name: "生菜", calories: 15, protein: 1.4, carbs: 2.1, fat: 0.2 },
    ],
  },
  {
    title: "油脂 & 坚果",
    subtitle: "热量炸弹，看着少实际热量极高，一定要少量",
    explanation:
      "油脂是热量密度最高的食物，普通喝汤勺 1 勺油 ≈ 90 大卡；坚果虽然健康，但一小把热量就很高，每天控制在 10g 以内。",
    items: [
      { name: "橄榄油", calories: 898, protein: 0, carbs: 0, fat: 99.8 },
      { name: "熟花生", calories: 567, protein: 26.0, carbs: 16.0, fat: 49.0 },
      { name: "牛油果", calories: 160, protein: 2.0, carbs: 8.5, fat: 14.7 },
    ],
  },
  {
    title: "水果类",
    subtitle: "天然糖分，代替奶茶甜品，减脂期控制分量",
    explanation:
      "水果有果糖，不是越多越好，香蕉碳水偏高适合训练前后吃，减脂优先选苹果、蓝莓、橙子。",
    items: [
      { name: "苹果", calories: 52, protein: 0.3, carbs: 14.0, fat: 0.2 },
      { name: "香蕉", calories: 91, protein: 1.1, carbs: 22.8, fat: 0.3 },
      { name: "蓝莓", calories: 57, protein: 0.7, carbs: 14.5, fat: 0.3 },
      { name: "橙子", calories: 48, protein: 0.9, carbs: 11.8, fat: 0.2 },
    ],
  },
];
