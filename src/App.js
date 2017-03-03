import React, { Component, PixelRatio } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { COLORS, ANIMATION_TYPES } from './ColorsStyles';

class App extends Component {

  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.refs.view.bounce(800)}>
               <Animatable.View ref="view" style={[{ backgroundColor: COLORS[3] }, styles.animatable]}>
                 <Text style={styles.text}>Bounce me!</Text>
               </Animatable.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.refs.view2.shake(800)}>
               <Animatable.View ref="view2" style={[{ backgroundColor: COLORS[6] }, styles.animatable]}>
                 <Text style={styles.text}>Shake me!</Text>
               </Animatable.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.refs.view3.fadeInDown(800)}>
               <Animatable.View ref="view3" style={[{ backgroundColor: COLORS[0] }, styles.animatable]}>
                 <Text style={styles.text}>Fade me!</Text>
               </Animatable.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.refs.view4.wobble(800)}>
               <Animatable.View ref="view4" style={[{ backgroundColor: COLORS[1] }, styles.animatable]}>
                 <Text style={styles.text}>Wobble me!</Text>
               </Animatable.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.refs.view5.jello(800)}>
               <Animatable.View ref="view5" style={[{ backgroundColor: COLORS[5] }, styles.animatable]}>
                 <Text style={styles.text}>Jello me!</Text>
               </Animatable.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
// <TouchableWithoutFeedback key={i} onPress={() => this._animatables[type][type](duration)}>
//     <View ref={component => this._animatables[type] = component} style={{ backgroundColor: COLORS[i % COLORS.length] }}, styles.animatable]}>
//       <Text style={styles.animatableName}>{type}</Text>
//     </View>
// </TouchableWithoutFeedback>

var styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 18,
    alignSelf: 'center',
    color:'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
  },
  slider: {
    height: 30,
    margin: 10,
  },
  toggle: {
    width: 120,
    backgroundColor: '#333',
    borderRadius: 3,
    padding: 5,
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    margin: 10,
    color: 'rgba(255, 255, 255, 1)',
  },
  toggledOn: {
    color: 'rgba(255, 33, 33, 1)',
    fontSize: 16,
    transform: [{
      rotate: '8deg'
    }, {
      translateY: -20
    }]
  },
  sectionHeader: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  sectionHeaderText: {
    textAlign: 'center',
    fontSize: 16,
  },
  animatableName: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  animatable: {
    padding: 20,
    margin: 10,
  }
}

export default App;
