import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
const About = () => {
  return (
    <>
      <MainLayout>
      
        <h1>About</h1>
        <h1 className={"title"}>
          Ir a <Link href="/">Index</Link>
        </h1>
        <div className={"description"}>
          <p>
            Get started by editing&nbsp;
            <code className={"code"}>pages/about.tsx</code>
          </p>
        </div>
        
      </MainLayout>
    </>
  );
};

export default About;
