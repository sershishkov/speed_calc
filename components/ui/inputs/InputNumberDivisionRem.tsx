import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';

function InputNumberDivisionRem({
  name,
  id,
  value,
  onChange,
  onKeyPress,
  tabIndex,
  display,
}: {
  id: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyPress: React.KeyboardEventHandler<HTMLInputElement>;
  tabIndex: number;
  display: string;
}) {
  return (
    <TextField
      type='number'
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      inputProps={{
        // maxLength: 1,
        tabIndex: tabIndex,
      }}
      onInput={(e) => {
        (e.target as HTMLInputElement).value = Math.max(
          0,
          parseInt((e.target as HTMLInputElement).value)
        )
          .toString()
          .slice(0, 2); //   maxLength: 2,
      }}
      sx={{
        div: {},
        fieldset: {
          display: 'none',
        },
        input: {
          display: display ? 'block' : 'none',
          padding: 0,
          width: '3rem',
          height: '2rem',
          textAlign: 'center',
          fontSize: '2rem',
          border: '1px solid #0f0',
          borderRadius: '3px',

          '&:focus , &:active,&:hover': {
            border: '1px solid green',
            outline: '1px solid transparent',
          },
        },
      }}
    />
  );
}

export default InputNumberDivisionRem;
