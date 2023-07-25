import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      numero: 0,
      botao: 'Iniciar',
      ultimo: null
    }

    this.timer = null

    this.vai = this.vai.bind(this)
    this.limpar = this.limpar.bind(this)

  }

  vai(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = 0;
      this.setState({botao: 'Iniciar'})
    }
    else{
      this.timer = setInterval(() => {
        this.setState({numero: this.state.numero + 0.1})
      }, 100)
      this.setState({botao: 'Parar'})
    }
  }

  limpar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'Iniciar'
    })
  }

  render(){
    return(
      <View style={styles.container}>
          <Image
            source={require('./src/cronometro.png')}
            style={styles.imgCronometro}
          />
          <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
          <View style={styles.btnArea}>
            <TouchableOpacity style={styles.btn} onPress={this.vai}>
              <Text styles={styles.btnTexto}>{this.state.botao}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={this.limpar}>
              <Text styles={styles.btnTexto}>Limpar</Text>
            </TouchableOpacity>

          </View>
            <View style={styles.ultima}>
              <Text style={styles.textoTempo}>
              {
                this.state.ultimo > 0 && this.state.ultimo.toFixed(1)
              }</Text>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer:{
    marginTop: -160,
    color: 'white',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto:{
    fontSize: 200,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  ultima:{
    marginTop: 40,
  },
  textoTempo:{
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF'
  }
})

export default App