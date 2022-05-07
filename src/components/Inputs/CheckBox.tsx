import styled from "styled-components";

const StyledCheckBox = styled.div`
  display: flex;
`;

type CheckBoxPropsType = {
  id?: string;
  label?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
};

export const CheckBox = (props: CheckBoxPropsType) => {
  const { id, label, checked, onChange } = props;

  const onClick = () => {
    onChange(!checked);
  };

  return (
    <StyledCheckBox>
      <input type="checkbox" id={id} checked={checked} onChange={onClick} />
      {label && <label htmlFor={id}>{label}</label>}
    </StyledCheckBox>
  );
};
