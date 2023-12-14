import Layout from "@/components/Layout/Layout";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Layout>
      <h1>404 | Page not found</h1>
      <Link to="/">Go to Main Page</Link>
    </Layout>
  );
}
