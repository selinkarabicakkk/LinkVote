
import LinkList from "./components/LinkList";
import AddButton from "./components/AddButton";

export default function Home() {
  return (
    <main style={{ height: '88.5vh' }} className=" flex flex-col">
      <AddButton />
      <LinkList />
    </main>
  );
}
