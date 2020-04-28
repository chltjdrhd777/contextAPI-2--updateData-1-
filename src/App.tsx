import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Flex from "typescript-styled-flex";
import HeaderComp from "./components/HeaderComp";
import NotificationContainer from "./components/Notification";
import store from "./Store";
//createGlobalStyle = define the whole page's CSS
//reset = to reduce default line heights, margins, font sizes.... I mean, It gives me a clear blueprint
const GlobalStyle = createGlobalStyle`
  ${reset};
  body{
    height: 100%;
    background-color: #ecf0f1;
  } 
`;

//alignCenter = if there are numerous items which have different height, align them right in the center of flex axis
//full = give width 100% height 100%

//If I want to return a specific function, I should mention like
// store => {return store.notification.map(....)}

//However, If I want to return Component directly, the form is like
//store => (<Component>......<Component>)
function AppPresenter() {
  return (
    <Fragment>
      <GlobalStyle />
      <HeaderComp />
      <Flex alignCenter full column>
        <store.Consumer>
          {(store) => {
            return store!.notification.map((everyObj) => (
              <NotificationContainer
                key={everyObj.id}
                text={everyObj.text}
                seen={everyObj.seen}
              />
            ));
          }}
        </store.Consumer>
      </Flex>
    </Fragment>
  );
}

export default AppPresenter;
