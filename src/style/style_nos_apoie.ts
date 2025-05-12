
import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  descricao: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  botaoDoacao: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textoBotao: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
