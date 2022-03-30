import React, { useState } from "react";
import { Dropdown, Option } from "../../components/forms/Dropdown";
import { Container } from "../../styles/styles";
const HiveForm = ({ data }) => {
  const [tag, setTag] = useState([]);
  const [age, setAge] = useState([]);

  const [isTagOpen, setIsTagOpen] = useState(false);
  const [isAgeOpen, setIsAgeOpen] = useState(false);

  const toggleTagView = () => setIsTagOpen(!isTagOpen);
  const toggleAgeView = () => setIsAgeOpen(!isAgeOpen);

  const onTagClicked = (value) => {
    if (tag.includes(value)) {
      setTag(tag.filter((e) => e !== value));
    } else {
      setTag((arr) => [...arr, value]);
    }
  };
  const onAgeClicked = (value) => {
    setAge([value]);
  };
  const resetTag = () => {
    setTag([]);
  };
  const resetAge = () => {
    setAge([]);
  };

  const selectAllTag = () => {
    setTag([]);
    data &&
      data.tags.map((item) => {
        return setTag((arr) => [...arr, item.tag]);
      });
  };

  return (
    <Container>
      <Dropdown
        label="Tag"
        buttonText="Send form"
        toggleDropView={toggleTagView}
        resetHeader={resetTag}
        selectAll={selectAllTag}
        isOpen={isTagOpen}
        values={tag}
      >
        {data &&
          data.tags.map((item, idx) => (
            <Option
              label="Tag"
              key={idx}
              value={item.tag}
              onClicked={onTagClicked}
              checkValues={tag}
            />
          ))}
      </Dropdown>
      <Dropdown
        label="Age"
        buttonText="Send form"
        toggleDropView={toggleAgeView}
        resetHeader={resetAge}
        isOpen={isAgeOpen}
        values={age}
      >
        {data &&
          data.ages.map((item, idx) => (
            <Option
              label="Age"
              key={idx}
              value={item.age}
              onClicked={onAgeClicked}
            />
          ))}
      </Dropdown>
    </Container>
  );
};

export default HiveForm;
