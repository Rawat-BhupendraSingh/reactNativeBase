import React from "react";
import { Text, Alert } from "react-native";
import {
  Container,
  Header,
  Button,
  Content,
  Form,
  Item,
  Input,
  Icon,
  Left,
  Grid,
  Row,
  Col
} from "native-base";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }
  onSubmit = () => {
    let body = {
      mobileEmail: this.state.email,
      password: this.state.password
    };

    fetch("http://35.200.132.218:3009/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log(response.data.comp_name);
        Alert.alert("name", response.data.comp_name);
        this.setState(
          {
            name: response.data.comp_name
          },
          function() {}
        );
      })
      .catch(error => null);

    // fetch(,{
  };
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Text>Cabbagesoft</Text>
        </Header>
        <Grid>
          <Col style={{ flex: 1 }}>
            <Content>
              <Form>
                <Item>
                  <Input
                    placeholder="username"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    name="email"
                  />
                </Item>
                <Item>
                  <Input
                    placeholder="pradeep"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    name="password"
                  />
                </Item>

                <Button onPress={this.onSubmit} full primary>
                  <Icon type="AntDesign" name="login" />
                  <Text>Submit</Text>
                </Button>
              </Form>
            </Content>
          </Col>
        </Grid>
      </Container>
    );
  }
}
