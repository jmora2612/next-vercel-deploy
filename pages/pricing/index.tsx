import type { ReactNode } from 'react'
import { MainLayout, DarkLayout } from "../../components/layouts";
import Link from "next/link";

const Pricing = () => {
    return (
        <>
          <h1>Pricing</h1>
          <h1 className={"title"}>
            Ir a <Link href="/index">Home</Link>
          </h1>
          <div className={"description"}>
            <p>
              Get started by editing&nbsp;
              <code className={"code"}>pages/pricing/index.tsx</code>
            </p>
          </div>
        </>
      );
}

Pricing.getLayout = function getLayout(page: ReactNode) {
    return (
      <MainLayout>
        <DarkLayout>
          {page}
        </DarkLayout>
      </MainLayout>
    );
  };

export default Pricing
