import styled from 'styled-components';

const StyledInput = styled.input`
  margin-left: 10px;
`;

const Filter = ({ value, onChange }) => (
    <label>
      Find contacts by name:
      <StyledInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search contacts..."
      />
    </label>
  );
  
  export default Filter;