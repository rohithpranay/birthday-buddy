import Person from "./Person";

function List({ list }) {
  return (
    <section>
      <ul>
        {list.map((birthday) => (
          <Person key={birthday.id} {...birthday} />
        ))}
      </ul>
    </section>
  );
}

export default List;
