import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderRadius: '50%',
    backgroundColor: '#7f7',
    margin: 'auto'
  },
  botaoD: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderRadius: '50%',
    backgroundColor: '#f33',
    margin: 'auto'
  },
  opcao:{
    borderTopWidth: 1,
    marginTop: 20,
    padding: 3,
    height: 200,
    width: 200,
  },
  txtBt:{
    margin: 'auto',
    fontSize: 20,
    fontWeight: 'bolder'
  },
  titulo:{
    fontSize: 27,
    marginHorizontal: 'auto',
  },
  bateria:{
    borderWidth: 2,
    width: 150,
    height: 150,
    borderRadius: '50%',
    margin: 'auto',
  },
  textoNivel:{
    margin: 'auto',
    fontWeight: 'bolder',
    fontSize: 25,
  }
})