import type { ReactNode } from 'react'
import { MainLayout, DarkLayout } from "../components/layouts";
import Link from "next/link";
export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <h1 className={"title"}>
        Ir a <Link href="/about">About</Link>
      </h1>
      <div className={"description"}>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/index.tsx</code>
        </p>
      </div>
    </>
  );
}

HomePage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  );
};
