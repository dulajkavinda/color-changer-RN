import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "native-base";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backColor: "#fff",
      buttonColor: "blue"
    };
  }

  changeBackground = () => {
    let randomColor = this.getRandomColor();
    let buttonColor = this.getRandomColor();
    this.setState({ backColor: randomColor, buttonColor });
  };

  getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: this.state.backColor
        }}
      >
        <TouchableOpacity>
          <Button
            style={[
              styles.buttonStyles,
              { backgroundColor: this.state.buttonColor }
            ]}
            onPress={this.changeBackground}
          >
            <Text style={styles.buttonText}>Change Color</Text>
          </Button>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonStyles: {
    padding: 10
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white"
  }
};
