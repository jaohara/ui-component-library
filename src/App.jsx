import React, { useState } from 'react';

import './styles/variables.scss';
import './styles/base.scss';

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
import CodeBlock from './components/CodeBlock/CodeBlock';

const selectListOptions = ["Apple", "Banana", "Carrot", "Daikon"];

const listItems = selectListOptions;

const loadingSpinnerData = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo cupiditate quo, blanditiis deserunt expedita officiis provident repudiandae autem ipsa tempora voluptas aliquid quis ratione deleniti ducimus inventore minima. Impedit, doloremque."

function App() {
  const [ buttonClickCount, setButtonClickCount ] = useState(0);
  const [ checkboxValue, setCheckboxValue ] = useState(false);
  const [ darkModeToggleValue, setDarkModeToggleValue ] = useState(false);
  const [ loadingSpinnerToggleValue, setLoadingSpinnerToggleValue ] = useState(false);
  const [ numberInputValue, setNumberInputValue ] = useState(0);
  const [ passwordInputValue, setPasswordInputValue ] = useState("");
  const [ selectInputValue, setSelectInputValue ] = useState("");
  const [ textInputValue, setTextInputValue ] = useState("");
  const [ toggleValue, setToggleValue ] = useState(false);

  const managedValuesListObject = {
    buttonClickCount,
    checkboxValue,
    numberInputValue,
    passwordInputValue,
    textInputValue,
    selectInputValue,
    toggleValue,
  }

  const incrementCounter = () => setButtonClickCount((current) => current + 1);

  return (
    <>
      <Section transparent>
        <Content noPadding opaque={false}>
          <ToggleSwitch
            label='Dark Mode?'
            setValue={setDarkModeToggleValue}
            value={darkModeToggleValue}
          />
        </Content>
        <Content opaque={false}>
          <h1>Inputs</h1>
          <ContentGroup>
            <div>
              <h2>form Elements</h2>

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
                setValue={setNumberInputValue}
                value={numberInputValue}
              />

              <ToggleSwitch 
                setValue={setToggleValue}
                value={toggleValue}
              />

              <Slider/>

              <RadioButtonGroup />

              <Checkbox
                label="Check the box?" 
                setValue={setCheckboxValue}
                value={checkboxValue}
              />

              <p>
                <Button onClick={incrementCounter}>Button</Button>
              </p>
              <Button disabled>Button (disabled)</Button>
            </div>

            <div>
              <h2>Managed Values</h2>
              <List listItems={managedValuesListObject}/>
            </div>
          </ContentGroup>

          <h2>Text Area</h2>
          <TextArea />

          <HorizontalDivider addTopMargin/>

          <h1>Displaying Data</h1>

          <h2>Badges</h2>
          <Badge></Badge>

          <h2>Cards</h2>
          <Card></Card>
          
          <h2>Lists</h2>
          <List listItems={listItems}/>
          <List ordered listItems={listItems}/>

          <h2>Tables</h2>
          <Table></Table>

          <h2>Code Blocks</h2>
          <CodeBlock />

          <HorizontalDivider addTopMargin/>

          <h1>Visual Components</h1>
          <h2>Icons</h2>
          <Icon iconType='home'/>

          <h2>Images</h2>
          <Image />

          <h2>Loading Spinner</h2>
          <ContentGroup>
            <div>
              <h3>Toggle Spinner</h3>
              <ToggleSwitch 
                setValue={setLoadingSpinnerToggleValue}
                value={loadingSpinnerToggleValue}
              />
            </div>
            
            <div>
              {
                loadingSpinnerToggleValue ? (
                  loadingSpinnerData
                ) : (  
                  <LoadingSpinner />
                )
              }
            </div>
          </ContentGroup>
          
        </Content>
      </Section>
    </>
  )
}

export default App;
