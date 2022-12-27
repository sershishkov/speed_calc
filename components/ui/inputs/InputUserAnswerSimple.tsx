import TextField from '@mui/material/TextField';

function InputUserAnswerSimple({
  name,
  label,
  id,
  value,
  onChange,
  onKeyPress,
}: // display,
{
  id: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyPress: React.KeyboardEventHandler<HTMLInputElement>;
  label: string;
  // display:string,
}) {
  return (
    <TextField
      name={name}
      label={label}
      type='number'
      id={id}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      sx={
        {
          // display: display,
        }
      }
    />
  );
}

export default InputUserAnswerSimple;
