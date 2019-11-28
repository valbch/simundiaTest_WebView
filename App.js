import React, { Component } from "react";
import { WebView } from "react-native-webview";

const App = () => {
  return (
    <WebView
      source={{
        uri: "https://www.simundia.com/m%C3%A9thodologie"
      }}
      style={{ marginTop: 20 }}
    />
  );
};

export default App;
