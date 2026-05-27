import type { Metadata } from "next";
import LegalDocument, { Section } from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "服务条款 | FitCalc",
  description:
    "FitCalc（fitcalc.com.cn）服务条款：说明工具性质、免责范围及用户使用须知。",
};

export default function TermsPage() {
  return (
    <LegalDocument title="服务条款" lastUpdated="2026年5月25日">
      <Section title="1. 接受条款">
        <p>
          欢迎使用 FitCalc（以下简称「本站」，网址 fitcalc.com.cn）。访问或使用本站，即表示您已阅读、理解并同意受本服务条款约束。若您不同意本条款，请立即停止使用本站。
        </p>
      </Section>

      <Section title="2. 服务说明">
        <p>
          本站提供免费的在线工具，用于根据您输入的身体数据，参考公开的营养学与运动科学公式，计算 BMI、基础代谢率（BMR）、每日总消耗（TDEE）、目标热量及宏量营养素（蛋白质、碳水、脂肪）的<strong className="text-gray-200">估算参考值</strong>，并展示一般性健康提示与常见食物营养数据。
        </p>
        <p>
          所有计算在您的浏览器本地完成，本站不保存您的输入数据，亦不提供个性化方案定制、饮食配餐、训练计划或一对一咨询服务。
        </p>
      </Section>

      <Section title="3. 非医疗及非专业建议声明">
        <p>
          <strong className="text-gray-200">
            本站内容仅供一般健康与健身参考，不构成医疗诊断、治疗建议、处方，也不构成注册营养师、医生或持证健身教练的专业意见。
          </strong>
        </p>
        <p>
          您不应将本站计算结果作为制定疾病治疗方案、用药、节食、增重或运动计划的唯一依据。若您有慢性疾病、进食障碍、孕期或哺乳期、未成年人、术后恢复等特殊情况，或对身体指标有疑问，请务必咨询具备资质的医疗机构或专业人员。
        </p>
      </Section>

      <Section title="4. 计算结果的局限性">
        <p>您理解并同意：</p>
        <ul className="list-disc space-y-2 pl-5 text-gray-400">
          <li>
            本站采用的 Mifflin-St Jeor、ACSM 活动系数、ISSN 宏量配比等均为人群统计模型，个体差异（体脂率、甲状腺功能、肌肉量、遗传、睡眠、压力等）可能导致实际需求与显示结果显著不同；
          </li>
          <li>食物营养表数据来源于《中国食物成分表》等公开资料，实际产品、烹饪方式与份量会影响真实摄入；</li>
          <li>碳水 5g/kg 等安全上限为通用参考，不适用于所有人群；</li>
          <li>任何自动生成的「健康建议」文案均为通用提示，非针对您个人的医学评估。</li>
        </ul>
      </Section>

      <Section title="5. 用户责任">
        <p>使用本站时，您同意：</p>
        <ul className="list-disc space-y-2 pl-5 text-gray-400">
          <li>自行判断计算结果是否适用于您的身体状况与目标；</li>
          <li>不以本站内容替代专业医疗或营养指导；</li>
          <li>不得将本站用于任何违法、有害或侵犯他人权益的目的；</li>
          <li>不得对本站进行恶意攻击、爬虫滥用、反向工程或其他干扰正常服务的行为。</li>
        </ul>
      </Section>

      <Section title="6. 免责声明">
        <p>
          在适用法律允许的最大范围内，本站及其运营者<strong className="text-gray-200">不对以下情形承担任何责任</strong>（包括直接、间接、附带、特殊或后果性损害）：
        </p>
        <ul className="list-disc space-y-2 pl-5 text-gray-400">
          <li>因依赖本站计算结果、建议或食物数据而导致的健康问题、体重变化、运动损伤或其他损失；</li>
          <li>因公式误差、数据更新滞后、浏览器兼容性或服务中断造成的计算偏差；</li>
          <li>因第三方服务（如 Google Analytics、托管商、CDN）故障或政策变更造成的影响；</li>
          <li>因不可抗力（自然灾害、网络中断、监管要求等）导致的服务暂停或数据不可用。</li>
        </ul>
        <p>本站按「现状」和「现有」基础提供，不作任何明示或默示的保证，包括但不限于准确性、完整性、适销性或特定用途适用性。</p>
      </Section>

      <Section title="7. 知识产权">
        <p>
          本站页面设计、文字说明、排版结构及原创内容受著作权法保护。未经书面许可，不得复制、修改、传播或用于商业目的。公开引用的科学公式与食物成分数据归属其各自来源，本站仅作整理展示。
        </p>
      </Section>

      <Section title="8. 第三方链接">
        <p>
          本站可能包含指向第三方网站（如 Google 政策页面）的链接。我们不对第三方内容或隐私做法负责，访问此类链接风险由您自行承担。
        </p>
      </Section>

      <Section title="9. 条款变更与终止">
        <p>
          我们保留随时修改、暂停或终止本站全部或部分服务的权利，恕不另行通知。修订后的条款自发布于本页面之日起生效。若您继续使用本站，即视为接受修订内容。
        </p>
      </Section>

      <Section title="10. 适用法律与争议解决">
        <p>
          本条款的解释与适用，在不影响您所在司法辖区强制性消费者保护规定的前提下，优先适用中华人民共和国法律。因使用本站产生的争议，双方应友好协商；协商不成的，可提交本站运营者所在地有管辖权的人民法院诉讼解决。
        </p>
      </Section>

      <Section title="11. 联系我们">
        <p>
          如对本服务条款有疑问，请通过 fitcalc.com.cn 网站公布的联系方式与我们沟通。
        </p>
      </Section>
    </LegalDocument>
  );
}
