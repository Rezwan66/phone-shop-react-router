import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="py-4 px-10 shadow-md mb-12 rounded-lg">
      <nav className="flex justify-between items-center">
        <div>
          <a href="/">
            <h2 className="text-2xl font-semibold">
              <span className="text-green-400">Phone</span>
              <span className="font-bold text-gray-600">Shop</span>
              <sup className="text-sm font-bold text-green-400">DE</sup>
            </h2>
          </a>
        </div>
        <div>
          <ul className="flex gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-green-400 underline'
                    : ''
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorites"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-green-400 underline'
                    : ''
                }
              >
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-green-400 underline'
                    : ''
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
