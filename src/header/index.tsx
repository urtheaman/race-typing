const Header = () => {
  console.count('Header');
  
  return (
    <div className="navbar bg-base-100 p-6 border-b border-gray-500">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl">Race Typing</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                className="shadow-sm"
                src="https://api.lorem.space/image/face?hash=33791"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
