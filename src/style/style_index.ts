import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
  },
  welcomeText: {
    color: 'orange',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  positiveText: {
    color: '#333',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#1E40AF', // Azul escuro (Tailwind blue-800)
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
    elevation: 3, // sombra para Android
    shadowColor: '#000', // sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#E0E7FF', // Azul claro (Tailwind blue-200)
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
