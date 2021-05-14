import styled from "styled-components";

export const AtmContainer = styled.div`
  background-color: #ecf5e7;
  border-radius: 3px;
  box-shadow: 0px 1px 5px black;
  color: #5a5a5a;
  margin: 1rem;
  padding: 0.25em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 50%;
  border-radius: 10px;
`;

export const AtmDisplay = styled.textarea`
  resize: none;
  margin: 0.5rem;
  width: 95%;
  border-radius: 5px;
  background-color: #dfdfdf;
  color: #474747;
  font-weight: 1000;
`;

export const MoneyInput = styled.input`
  border-radius: 3px;
  border: 1px solid black;
  margin-left: 0.5rem;
  background-color: #dfdfdf;
`;

export const SubmitButton = styled.button`
  margin: 1rem 0.5rem;
  background: transparent;
  box-shadow: 0px 0.5px 2.5px #4d4d4d;
  border: 1px solid #6aa063;
  color: #6aa063;
  padding: 0.3rem;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.5s;
  &:hover {
    background-color: #f77e60;
    color: #dddddd;
    border: 1px solid #f77e60;
  }
`;
