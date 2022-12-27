import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

function ShowHintSwitch({
  showHints,
  onChangeShowHints,
}: {
  showHints: boolean;
  onChangeShowHints: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={showHints}
          onChange={onChangeShowHints}
          color='primary'
        />
      }
      label={showHints ? 'отключить подсказки' : 'включить посказки'}
      labelPlacement='start'
    />
  );
}

export default ShowHintSwitch;
