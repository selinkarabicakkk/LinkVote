
import LinkList from "./components/LinkList";
import AddButton from "./components/AddButton";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <AddButton />
      <LinkList />
    </main>
  );
}
