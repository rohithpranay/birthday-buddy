import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [birthdayList, setBirthdayList] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{birthdayList.length} Birthdays Today</h3>
        <List list={birthdayList} />
        <button className="btn btn-block" onClick={() => setBirthdayList([])}>
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
