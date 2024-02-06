function Navbar() {
  return (
    <nav className="mb-12 flex w-full justify-between bg-blue-500 p-4">
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
