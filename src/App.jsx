import React, {
  useContext, 
  useState 
} from 'react';

import './styles/variables.scss';
import './styles/base.scss';

import { 
  ThemeWrapper,
  ThemeContext 
} from './contexts/ThemeContext';

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
  NavBar,
  Notification,
  NotificationPane,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
  Section,
  Select,
  SideBar,
  Slider,
  Table,
  TextArea,
  TextInput,
  ToggleSwitch,
} from './components';
import CodeBlock from './components/CodeBlock/CodeBlock';

import { LIBRARY_NAME } from './globals';

function App() {
  const [ buttonClickCount, setButtonClickCount ] = useState(0);
  const [ checkboxValue, setCheckboxValue ] = useState(false);
  const [ leftSideBarIsVisible, setLeftSideBarIsVisible ] = useState(false);
  const [ loadingSpinnerToggleValue, setLoadingSpinnerToggleValue ] = useState(false);
  const [ numberInputValue, setNumberInputValue ] = useState(0);
  const [ passwordInputValue, setPasswordInputValue ] = useState("");
  const [ selectInputValue, setSelectInputValue ] = useState("");
  const [ sliderValue, setSliderValue ] = useState(20);
  const [ rightSideBarIsVisible, setRightSideBarIsVisible ] = useState(false);
  const [ textInputValue, setTextInputValue ] = useState("");
  const [ toggleValue, setToggleValue ] = useState(false);

  const managedValuesListObject = {
    buttonClickCount,
    checkboxValue,
    numberInputValue,
    passwordInputValue,
    textInputValue,
    selectInputValue,
    sliderValue,
    toggleValue,
  }

  const { 
    theme,
    toggleTheme,
  } = useContext(ThemeContext);

  const isDarkMode = theme === 'dark';

  const incrementCounter = () => setButtonClickCount((current) => current + 1);

  // NavBar elements
  const logoElement = (<h1>{LIBRARY_NAME}</h1>);

  const menuElement = (
    <ToggleSwitch
      label='Dark Mode?'
      onClick={toggleTheme}
      value={isDarkMode}
    />
  );

  const toggleLeftSidebar = () => setLeftSideBarIsVisible(current => !current);
  const toggleRightSidebar = () => setRightSideBarIsVisible(current => !current);

  return (
    <ThemeWrapper>

      {/* Side bars */}
      <SideBar
        isVisible={leftSideBarIsVisible}
        toggle={toggleLeftSidebar}
      />
      <SideBar
        isVisible={rightSideBarIsVisible}
        right
        toggle={toggleRightSidebar}
      />

      <NavBar
        fixed
        logoElement={logoElement}
        menuElement={menuElement}
        navItems={navItems}
        toggleLeftSidebar={toggleLeftSidebar}
        toggleRightSidebar={toggleRightSidebar}
        // transparent
      />

      <Section
        hero
      >
        <p>Hero Section</p>
      </Section>

      <Section>
        <Content opaque={false}>
          <h1>Inputs</h1>
          <ContentGroup>
            <Content>
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

              <Slider
                setValue={setSliderValue}
                value={sliderValue}
                min={0}
                max={100}
              />

              <RadioButtonGroup />

              <Checkbox
                label="Check the box?" 
                setValue={setCheckboxValue}
                value={checkboxValue}
              />

              <Content noFlex noPadding noMargin>
                <Button onClick={incrementCounter}>Button</Button>
                <Button disabled>Button (disabled)</Button>
              </Content>
            </Content>

            <Content>
              <h2>Managed Values</h2>
              <List listItems={managedValuesListObject}/>
            </Content>
          </ContentGroup>

          <Content>
            <h2>Text Area</h2>
            <TextArea />
          </Content>

          <HorizontalDivider addTopMargin/>

          <h1>Displaying Data</h1>

          <h2>Badges</h2>
          <Content noFlex>
            <Badge>Test Badge</Badge>
            <Badge>Another Badge</Badge>
            <Badge>Maybe a Pill?</Badge>
          </Content>

          <h2>Cards</h2>
          <Card></Card>
          
          <h2>Lists</h2>
          <List listItems={listItems}/>
          <List ordered listItems={listItems}/>

          <h2>Tables</h2>
          <Table 
            caption={tableCaption}
            data={tableData}
            headers={tableHeaders}
            zebraStriping
          />

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
            <Content>
              <h3>Toggle Spinner</h3>
              <ToggleSwitch 
                setValue={setLoadingSpinnerToggleValue}
                value={!loadingSpinnerToggleValue}
              />
            </Content>
            
            <Content loading={loadingSpinnerToggleValue}>
              {loadingSpinnerData}
            </Content>
          </ContentGroup>
          
        </Content>
      </Section>
    </ThemeWrapper>
  )
}

// DEFAULT VALUES/CONSTANTS
const selectListOptions = ["Apple", "Banana", "Carrot", "Daikon"];

const tableHeaders = [
  { key: "name", label: "Name", isRowHeader: true },
  { key: "age", label: "Age" },
  { key: "color", label: "Favorite Color?" },
  { key: "food", label: "Favorite Food?" },
];

const tableData = [
  { name: "John", age: 32, color: "Blue", food: "Lasagna" },
  {"name": "Alice", "age": 28, "color": "Green", "food": "Pizza"},
  {"name": "Bob", "age": 34, "color": "Red", "food": "Sushi"},
  {"name": "Charlie", "age": 25, "color": "Yellow", "food": "Burger"},
  {"name": "Diana", "age": 30, "color": "Purple", "food": "Salad"},
  {"name": "Evan", "age": 22, "color": "Orange", "food": "Tacos"},
  {"name": "Fiona", "age": 27, "color": "Pink", "food": "Pasta"},
  {"name": "George", "age": 35, "color": "Black", "food": "Curry"},
  {"name": "Hannah", "age": 29, "color": "White", "food": "Sandwich"},
  {"name": "Ivan", "age": 31, "color": "Gray", "food": "Steak"},
];

const tableCaption = "An example table with a caption.";

const listItems = selectListOptions;

const navItemAction = () => console.log(`nav item clicked`);

const navItems = [
  { action: navItemAction, label: "Home", selected: true },
  { action: navItemAction, label: "About" },
  { action: navItemAction, label: "Contact" },
];

const loadingSpinnerData = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo cupiditate quo, blanditiis deserunt expedita officiis provident repudiandae autem ipsa tempora voluptas aliquid quis ratione deleniti ducimus inventore minima. Impedit, doloremque."


export default App;
