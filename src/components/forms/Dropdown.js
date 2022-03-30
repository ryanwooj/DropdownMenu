import React from "react";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownSelectAll,
  DropDownRemoveAll,
  DropDownLabel,
  DropDownListContainer,
  DropDownList,
  DropDownIcon,
  ListItem,
  CheckBoxContainer,
  CheckMark,
} from "../../styles/styles";

export function Dropdown({
  toggleDropView,
  isOpen,
  values,
  resetHeader,
  selectAll,
  label,
  children,
}) {
  return (
    <DropDownContainer>
      {label && label === "Tag" && (
        <DropDownSelectAll onClick={selectAll}>Select All</DropDownSelectAll>
      )}
      <DropDownRemoveAll onClick={resetHeader}>
        {label && label === "Tag" ? "Remove All" : "Remove"}
      </DropDownRemoveAll>
      <DropDownHeader onClick={toggleDropView}>
        {values.length === 0 ? "Please Select" : values.join()}
        <DropDownLabel>{label}</DropDownLabel>
        {isOpen ? <DropDownIcon /> : <DropDownIcon drop />}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>{children}</DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}

export function Option({ label, value, onClicked, checkValues }) {
  return (
    <ListItem onClick={() => onClicked(value)} key={Math.random()}>
      {checkValues && checkValues.includes(value) ? (
        <CheckBoxContainer>
          <CheckMark active />
        </CheckBoxContainer>
      ) : (
        <CheckBoxContainer>
          {label === "Tag" ? <CheckMark /> : ""}
        </CheckBoxContainer>
      )}
      {value}
    </ListItem>
  );
}
