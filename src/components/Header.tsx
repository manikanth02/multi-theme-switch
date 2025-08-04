import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, setTheme } = useTheme();

  const bgClass =
    theme === 'theme2'
      ? 'bg-gray-800 text-white'
      : theme === 'theme3'
      ? 'bg-yellow-300 text-pink-900'
      : 'bg-white text-gray-900';

  return (
    <header
      className={`fixed top-0 left-0 w-full shadow-md flex items-center justify-between px-6 py-3 z-50 transition-all ${bgClass}`}
    >
      <div className="font-bold text-xl">🌗 Theme App</div>
      <div className="flex items-center gap-4">
      <select
  value={theme}
  onChange={(e) => setTheme(e.target.value as any)}
  className={`border px-2 py-1 rounded
    ${
      theme === 'theme2'
        ? 'bg-gray-700 text-white border-gray-600'
        : theme === 'theme3'
        ? 'bg-yellow-200 text-pink-900 border-yellow-400'
        : 'bg-white text-gray-900 border-gray-300'
    }`}
>

          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>

        <nav className="flex gap-4 text-sm font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
