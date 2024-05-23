function Person({ image, name, age }) {
  return (
    <li className="person">
      <img className="img" src={image} alt="photo" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </li>
  );
}

export default Person;
