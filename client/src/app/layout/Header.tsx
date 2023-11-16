import { AppBar, Switch, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar position='static' sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant='h6'>RE-STORE</Typography>
        <Switch
          onChange={handleThemeChange}
          color='default'
          checked={darkMode}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
