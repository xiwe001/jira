import React, { ChangeEvent, useEffect, useState } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}

const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  const selectChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    // console.log(evt.target);
    setParam({ ...param, personId: evt.target.value });
  };

  const inputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setParam({
      ...param,
      name: evt.target.value,
    });
  };
  return (
    <form action="">
      <input
        title="input1"
        type="text"
        value={param.name}
        onChange={inputChange}
      />
      <select
        title="selectPerson"
        value={param.personId}
        onChange={selectChange}
      >
        <option value={""}>负责人</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export { SearchPanel };
