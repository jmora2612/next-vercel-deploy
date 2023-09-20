import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";
const Contact = () => {
  return (
    <>
      <MainLayout>
        <h1>Contact</h1>
        <h1 className={"title"}>
          Ir a <Link href="/">Home</Link>
        </h1>
        <div className={"description"}>
          <p>
            Get started by editing&nbsp;
            <code className={"code"}>pages/contact/index.tsx</code>
          </p>
        </div>
      </MainLayout>
    </>
  );
};

export default Contact;
