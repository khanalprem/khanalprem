import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

const ThemeSwitcher = () => {
  let clickedClass = 'clicked';
  const body = document.body;
  const lightTheme = 'light';
  const darkTheme = 'dark';
  const lightIcon = true;
  const darkIcon = false;
  let theme;
  let switcherTheme;
  if (localStorage) {
    theme = localStorage.getItem('theme');
    switcherTheme = localStorage.getItem('switcherTheme');
  }
  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem('theme', 'light');
      localStorage.setItem('switcherTheme', false);
      theme = lightTheme;
      switcherTheme = lightIcon;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem('theme', 'dark');
      localStorage.setItem('switcherTheme', true);
      theme = darkTheme;
      switcherTheme = darkIcon;
    }
  };
  return (
    <div
      className={theme === 'light ' ? clickedClass : ''}
      onClick={(e) => {
        switchTheme(e);
      }}
    >
      <span className="switch-button is-circle is-circle_border is-circle_sm">
        {switcherTheme ? <IoMoonOutline /> : <IoSunnyOutline />}
      </span>
    </div>
  );
};

export default ThemeSwitcher;
