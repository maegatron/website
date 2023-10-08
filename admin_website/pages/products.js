import Link from "next/link";
import Layout from "@/components/Layout";

export default function Products() {
  return (
    <Layout>
      <Link href={"/products/new"} className="bg-blue-100 text-blue-900 py-2 px-2 rounded-full">
        Add product
      </Link>
    </Layout>
  );
}
