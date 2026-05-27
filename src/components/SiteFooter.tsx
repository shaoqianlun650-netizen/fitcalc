import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-auto pt-6 text-center text-sm text-gray-600">
      <p>Built with FitCalc</p>
      <p className="mt-2 flex min-w-0 flex-wrap items-center justify-center gap-x-3 gap-y-2">
        <Link
          href="/privacy"
          className="inline-flex min-h-11 touch-manipulation items-center px-1 text-gray-500 transition-colors hover:text-accent"
        >
          隐私政策
        </Link>
        <span className="text-gray-700" aria-hidden="true">
          ·
        </span>
        <Link
          href="/terms"
          className="inline-flex min-h-11 touch-manipulation items-center px-1 text-gray-500 transition-colors hover:text-accent"
        >
          服务条款
        </Link>
      </p>
    </footer>
  );
}
