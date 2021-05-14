import React, { useEffect, useState } from "react";
import { AtmContainer, AtmDisplay, SubmitButton, MoneyInput } from "./styled";
import { getGreeting, withdraw } from "../../api/requests";

const Atm = () => {
  const [data, setData] = useState<string>();

  useEffect(() => {
    getGreeting().then((data) => setData(data));
  }, []);

  const [value, setValue] = useState<string>();

  const handleInputOnChange = (e: any) => {
    setValue(e.target.value);
  };

  const billCounter = (billArray: any) => {
    let hundred: number = 0;
    let fivehundred: number = 0;
    let onethousand: number = 0;

    billArray.forEach((element: any) => {
      if (element.value === 1000) {
        onethousand += 1;
      } else if (element.value === 500) {
        fivehundred += 1;
      } else if (element.value === 100) {
        hundred += 1;
      }
    });

    setData(
      `You withdrew:\n${hundred > 0 ? hundred + " x 100 bills\n" : ""}${
        fivehundred > 0 ? fivehundred + " x 500 bills\n" : ""
      }${onethousand > 0 ? onethousand + " x 1000 bills\n" : ""} `
    );
  };

  const submitValue = () => {
    let message: string = "You withdrew ";
    withdraw(value!).then((response) => {
      if (response.status === 400) {
        setData(response.data);
      } else {
        billCounter(response.data);
      }
    });
  };

  if (!data) {
    return <div></div>;
  }

  return (
    <AtmContainer>
      <h1>ATM</h1>
      <AtmDisplay readOnly cols={30} rows={10} value={data} />
      <div>
        <MoneyInput
          type="text"
          placeholder="Amount"
          onChange={handleInputOnChange}
        />
        <SubmitButton onClick={submitValue} type="submit">
          Withdraw
        </SubmitButton>
      </div>
    </AtmContainer>
  );
};

export default Atm;
