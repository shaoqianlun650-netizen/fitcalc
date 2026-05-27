import type { Metadata } from "next";
import LegalDocument, { Section } from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "隐私政策 | FitCalc",
  description:
    "FitCalc（fitcalc.com.cn）隐私政策：说明网站数据收集范围、GA4 统计用途及用户权利。",
};

export default function PrivacyPage() {
  return (
    <LegalDocument title="隐私政策" lastUpdated="2026年5月25日">
      <Section title="1. 概述">
        <p>
          FitCalc（以下简称「本站」，网址 fitcalc.com.cn）是一款免费的在线健身热量与营养计算工具。我们重视您的隐私，本政策说明本站如何处理与访问相关的信息。
        </p>
        <p>
          使用本站即表示您已阅读并理解本政策。若您不同意本政策，请停止使用本站。
        </p>
      </Section>

      <Section title="2. 我们收集的信息">
        <p>
          <strong className="text-gray-200">本站不收集、不存储您输入的任何个人健康或身体数据。</strong>
          您在计算器表单中填写的性别、年龄、身高、体重、活动水平及目标等信息，仅在您的浏览器本地用于即时计算，不会上传至本站服务器，本站亦无用户注册、登录或数据库功能。
        </p>
        <p>
          本站仅通过 Google Analytics 4（GA4，衡量 ID：G-3TEEDZHJCB）收集<strong className="text-gray-200">匿名化的网站访问统计数据</strong>，可能包括但不限于：
        </p>
        <ul className="list-disc space-y-2 pl-5 text-gray-400">
          <li>页面浏览量、访问路径及停留时长；</li>
          <li>大致地理位置（国家/地区、城市层级，非精确地址）；</li>
          <li>设备类型、操作系统、浏览器类型及屏幕分辨率；</li>
          <li>访问来源（如搜索引擎、外部链接）；</li>
          <li>匿名化的会话与互动事件（用于了解功能使用情况）。</li>
        </ul>
        <p>
          上述数据由 Google 按其隐私政策处理。本站不通过 GA4 收集可直接识别您身份的个人信息（如姓名、电话、电子邮箱、身份证号等）。
        </p>
      </Section>

      <Section title="3. 数据用途">
        <p>GA4 收集的匿名统计数据仅用于以下目的：</p>
        <ul className="list-disc space-y-2 pl-5 text-gray-400">
          <li>了解网站访问量与用户行为趋势，改进页面内容与使用体验；</li>
          <li>诊断技术问题，保障网站稳定运行；</li>
          <li>评估推广与分享渠道效果（汇总层面）。</li>
        </ul>
        <p>我们不会将上述数据用于广告投放定向、出售给第三方，或与您输入的计算数据进行关联。</p>
      </Section>

      <Section title="4. Cookie 与类似技术">
        <p>
          GA4 可能使用 Cookie 或类似技术以区分访问会话并进行统计。您可通过浏览器设置拒绝或删除 Cookie，或在安装相关浏览器扩展后选择停用 Google Analytics。停用后不影响本站计算功能的正常使用。
        </p>
        <p>
          有关 Google 如何使用数据，请参阅{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Google 隐私政策
          </a>
          及{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Google Analytics 退出说明
          </a>
          。
        </p>
      </Section>

      <Section title="5. 境内与境外访问者">
        <p>
          本站面向中国大陆及海外用户开放访问。无论您从何处访问，我们对您输入数据的处理方式一致：不收集、不存储。
        </p>
        <p>
          <strong className="text-gray-200">中国大陆用户：</strong>
          我们遵守《中华人民共和国个人信息保护法》等相关法律法规，坚持最小必要原则，不处理与服务无关的个人信息。
        </p>
        <p>
          <strong className="text-gray-200">欧盟/英国等地区用户：</strong>
          在适用法律要求下，您可能享有访问、更正、删除个人数据及反对处理等权利。因本站不直接收集可识别个人身份的信息，相关请求主要涉及 GA4 数据，请通过 Google 渠道行使，或联系本站协助说明。
        </p>
      </Section>

      <Section title="6. 数据共享与存储">
        <p>
          除 GA4 服务提供商（Google LLC 及其关联公司）按统计目的处理匿名访问数据外，本站不向任何第三方出售、出租或共享您的个人信息。
        </p>
        <p>
          匿名统计数据由 Google 按其基础设施与保留政策存储，具体期限以 Google 官方说明为准。
        </p>
      </Section>

      <Section title="7. 数据安全">
        <p>
          由于计算数据不离开您的设备，本站服务器侧无用户输入数据泄露风险。我们仍采取合理措施保护网站托管环境安全，并建议您勿在公共设备上保存敏感信息。
        </p>
      </Section>

      <Section title="8. 未成年人">
        <p>
          本站不面向未满 14 周岁的儿童主动收集个人信息。若监护人发现未成年人使用本站并对此有疑虑，请联系我们，我们将协助说明数据处理情况。
        </p>
      </Section>

      <Section title="9. 政策更新">
        <p>
          我们可能适时修订本政策，修订版将在本页面发布并更新「最后更新」日期。重大变更时，我们会在网站显著位置提示。继续使用本站即视为接受更新后的政策。
        </p>
      </Section>

      <Section title="10. 联系我们">
        <p>
          如对本隐私政策有疑问、建议或投诉，请通过 fitcalc.com.cn 网站公布的联系方式与我们沟通，我们将在合理期限内予以回复。
        </p>
      </Section>
    </LegalDocument>
  );
}
