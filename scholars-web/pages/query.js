import { useRouter } from "next/router";

function SearchPage() {
  const router = useRouter();
  const { q } = router.query;
}
