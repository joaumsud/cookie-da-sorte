import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class App extends Component {

  constructor(props){
    super(props)
      this.state ={
        textoFrase: " ",
        img: require('./src/image/biscoito.png'),
      };

      this.quebraBiscoito = this.quebraBiscoito.bind(this)

      this.frases = [
        'Siga os bons e aprenda com eles.', 
        'O bom-senso vale mais do que muito conhecimento.', 
        'O riso é a menor distância entre duas pessoas.', 
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'
      ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: this.frases[numeroAleatorio],
      img: require('./src/image/biscoitoAberto.png')
    })
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Image
        source={this.state.img}
          style={styles.img}
        />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
          <Text style={styles.btnTexto}> Abrir Biscoito </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center" ,
    backgroundColor: "#F5F5F5",
  },
  img: { 
    width: 250, 
    height: 250 
  },
  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: "row",
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#dd7b22",
  },
  btnTexto: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFFFFF",
  }
});
