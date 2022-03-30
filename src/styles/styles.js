import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const DropDownContainer = styled("div")`
  width: 15em;
  margin: 0 1em;
`;

const DropDownHeader = styled("div")`
  position: relative;
  padding: 0.8em 2em 0.8em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  border-radius: 0.3em;
  border: 2px solid #204ba2;
  font-weight: 500;
  font-size: 1rem;
  color: #232323;
  background: #ffffff;
`;
const DropDownSelectAll = styled("button")`
  position: relative;
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  width: 5rem;
  margin: 0.1rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  border-radius: 0.3em;
  border: 2px solid #204ba2;
  font-weight: 500;
  font-size: 0.8rem;
  color: #232323;
  background: #ffffff;
`;
const DropDownRemoveAll = styled("button")`
  position: relative;
  padding: 0.5rem 0.5rem;
  width: 6rem;
  margin: 0.1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  border-radius: 0.3em;
  border: 2px solid #204ba2;
  font-weight: 500;
  font-size: 0.8rem;
  color: #232323;
  background: #ffffff;
`;

const DropDownLabel = styled("div")`
  position: absolute;
  left: 1em;
  top: -0.5em;
  color: #204ba2;
  font-size: 0.8rem;
  z-index: 1;
  background: #fff;
  padding: 0 0.5em;
`;

const DropDownListContainer = styled("div")`
  box-shadow: 0 0.6em 0.6em 0.3em rgba(0, 0, 0, 0.2);
  max-height: 11em;
  overflow: scroll;
  transition: height 0.4s ease;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  font-weight: 500;
`;

const ListItem = styled("div")`
  list-style: none;
  padding: 0.7em 0;
  color: #232323;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background: #eef4f9;
    transform: scale(1.03);
    font-size: 1.1rem;
  }
`;

const CheckBoxContainer = styled("label")`
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const CheckMark = styled("span")`
  position: absolute;
  left: 0.5em;
  top: 0em;
  display: inline-block;
  height: 0.3em;
  width: 0.3em;
  border: 0.2em #ddd solid;
  margin-right: 4px;
  background: ${(props) => (props.active ? "#82A9DE" : "#fff")};
  ${(props) => props.active && "border-color: #2196f3"}
`;

const DropDownIcon = styled("i")`
  position: absolute;
  cursor: pointer;
  right: 0.7em;
  top: 33%;
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 0.25em;
  transform: ${(props) => (props.drop ? "rotate(45deg)" : "rotate(-135deg)")};
`;

export {
  Container,
  DropDownContainer,
  DropDownHeader,
  DropDownSelectAll,
  DropDownRemoveAll,
  DropDownLabel,
  DropDownList,
  DropDownListContainer,
  ListItem,
  CheckBoxContainer,
  CheckMark,
  DropDownIcon,
};
