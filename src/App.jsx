import React, { useState } from 'react';

import { 
  Badge,
  Button,
  Card,
  Checkbox,
  Content,
  ContentGroup,
  HorizontalDivider,
  Icon,
  Image,
  List,
  LoadingSpinner,
  LogPane,
  Notification,
  NotificationPane,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
  Section,
  Select,
  Slider,
  Table,
  TextArea,
  TextInput,
  ToggleSwitch,
} from './components';

const selectListOptions = ["Apple", "Banana", "Carrot", "Daikon"];

function App() {
  const [ numberInputValue, setNumberInputValue ] = useState(0);
  const [ passwordInputValue, setPasswordInputValue ] = useState("");
  const [ textInputValue, setTextInputValue ] = useState("");
  const [ selectInputValue, setSelectInputValue ] = useState("");

  return (
    <>
      <Section transparent>
        <Content opaque={false}>
          <h1>Inputs</h1>
          <ContentGroup>
            <div>
              <h2>UI Elements</h2>

              <TextInput
                label="Text Input"
                value={textInputValue}
                setValue={setTextInputValue}
              />

              <TextInput
                label="Text Input (as Password)"
                password
                value={passwordInputValue}
                setValue={setPasswordInputValue}
              />

              <Select
                label="Dropdown Selection"
                options={selectListOptions}
                setValue={setSelectInputValue}
                value={selectInputValue}
              />

              <NumberInput
                label="Numeric Input"
                value={numberInputValue}
                setValue={setNumberInputValue}
              />

              <ToggleSwitch />

              <Slider/>

              <RadioButtonGroup />

              <Checkbox />

              <p>
                <Button>Button</Button>
              </p>
              <Button disabled>Button (disabled)</Button>
            </div>

            <div>
              <h2>Managed Values</h2>
            </div>
          </ContentGroup>

          <HorizontalDivider addTopMargin/>

          <h1>Displaying Data</h1>

          <h2>Badges</h2>
          <Badge></Badge>
          
          <h2>Lists</h2>
          <List></List>

          <h2>Tables</h2>
          <Table></Table>

          <HorizontalDivider addTopMargin/>

          <h1>Icons and Images</h1>

          
          
        </Content>
      </Section>
    </>
  )
}

export default App
