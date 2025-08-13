import Header from "./components/header";
import Item from "./components/Item";

function App() {
  return (
    <>
      <Header />
      <section>
        <div className="mx-auto flex max-w-7xl items-center justify-between p-8">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </section>
    </>
  );
}

export default App;
