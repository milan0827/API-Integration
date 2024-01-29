function Navbar() {
  return (
    <nav className="w-full p-4 bg-blue-500 flex justify-between ">
      <div>Logo</div>
      <ul className="flex ">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>Contact us</a>
        </li>
        <li>
          <a>Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
