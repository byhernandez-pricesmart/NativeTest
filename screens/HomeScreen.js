import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import { Header, Form, Item, Input, Body, Left, Right, Icon, Button } from 'native-base';

import validate from '../validate_wrapper'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      nameError: '',
      email: '',
      emailError: '',
      place: '',
      placeError: '',
      redirect: false
    }
  }

  static navigationOptions = {
    header: null,
  };

  onHandleSubmit = () => {
    this.setState({
      nameError: validate('nombre', this.state.name),
      emailError: validate('correo', this.state.email),
      placeError: validate('ubicacion', this.state.place)
    }, () => {
      if(this.state.nameError || this.state.emailError || this.state.placeError){
        alert('Error en campos del formulario.')
      }else{
        this.props.navigation.navigate('Settings')
      }
    }) 
  }

  onPageChange = () => {
    console.log('UAUAU')
    console.log(this.props.navigation)
    this.props.navigation.navigate('Links')
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
          
          <View style={{ height: 100 }}>
            <Header style={{ 
              marginTop: 20,
              backgroundColor: '#fff',
              flexDirection: 'row',
              elevation: 0
            }}>
              <Left>
                <Button transparent>
                  <Icon style={{ color: '#30006e' }} name='menu' />
                </Button>
              </Left>
              <Body style={{ marginTop: 20 }}>
                <Text style={{ width: '100%', color: '#6b22ab', textAlign: 'right', marginLeft: -10, fontWeight: 'bold' }}>Perfil</Text>
              </Body>
              <Right />
            </Header>
          </View>

          <View style={{ height: 500 }}>
            <View style={styles.welcomeContainer}>
              <Text style={{ marginBottom: 10, color: 'gray', fontWeight: 'bold' }}>Datos Personales</Text>
              <TouchableHighlight
                        style={[styles.profileImgContainer, { borderColor: '#6b22ab', borderWidth: 1 }]}
                      >
                  <Image source={ require('../assets/images/Byron.jpg') } style={styles.profileImg} />
              </TouchableHighlight>
            </View>

            <View style={styles.getStartedContainer}>
              <Form style={{ width: 300 }}>
                <Item style={styles.item}>
                  <Input style={{ marginLeft: 10 }} placeholder="Nombre Completo" autoFocus={true}
                    onChangeText={value => this.setState({name: value.trim()})} 
                    onBlur={() => {
                      this.setState({
                        nameError: validate('nombre', this.state.name)
                      })
                    }}
                  />
                </Item>
                {this.state.nameError ? <Text style={styles.error}>{this.state.nameError}</Text> : null}
                <Item style={styles.item}>
                  <Input style={{ marginLeft: 10 }} placeholder="Correo Electrónico" 
                    onChangeText={value => this.setState({email: value.trim()})} 
                    onBlur={() => {
                      this.setState({
                        emailError: validate('correo', this.state.email)
                      })
                    }}
                  />
                </Item>
                {this.state.emailError ? <Text style={styles.error}>{this.state.emailError}</Text> : null}
                <Item style={styles.item}>
                  <Input style={{ marginLeft: 10 }} placeholder="Ubicación" 
                    onChangeText={value => this.setState({place: value.trim()})} 
                    onBlur={() => {
                      this.setState({
                        placeError: validate('ubicacion', this.state.place)
                      })
                    }}
                  />
                </Item>
                {this.state.placeError ? <Text style={styles.error}>{this.state.placeError}</Text> : null}
              </Form>
            </View>
          </View>
          
          <View style={{ height: 200 }}>

            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <Button onPress={ this.onHandleSubmit } iconLeft style={{ width: 140, backgroundColor: '#0fd0d8', marginTop: 10,
                  borderRadius: 10, marginLeft: '31%' }}>
                    <Icon name='save' />
                    <Text style={{ color: '#fff', justifyContent: 'center', marginRight: '15%' }}> GUARDAR </Text>
              </Button>
            </View>
            
            <View style={{ flexDirection: 'row', width: '100%', marginTop: 10  }}>
              <View style={{ marginLeft: '46%', marginRight: '3%' }}>
                <Button light rounded style={{ width: 10, height: 10, backgroundColor: '#0fd0d8' }} />
              </View>
              <View>
                <Button onPress={ this.onPageChange } light rounded style={{ width: 10, height: 10, backgroundColor: '#ccc' }}></Button>
              </View>
            </View>

          </View>

      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  profileImgContainer: {
    marginLeft: 8,
    height: 150,
    width: 150,
    borderRadius: 90,
    overflow: 'hidden',
  },
  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 40,
  },
  item: {
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    marginRight: 15,
    marginBottom: 10
  },
  error: {
    marginBottom: 10,
    marginLeft: 15,
    color: 'red'
  }
});
