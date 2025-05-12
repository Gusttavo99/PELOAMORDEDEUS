import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f0ff',
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#dbeafe',
    borderRadius: 12,
    marginBottom: 16,
    padding: 12,
    alignItems: 'center',
    ...Platform.select({
      web: {
        boxShadow: '0 2px 4px rgba(30, 64, 175, 0.2)',
      },
      default: {
        shadowColor: '#1e40af',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
      },
    }),
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#2563eb',
  },
  balao: {
    flex: 1,
    backgroundColor: '#cbd5e1',
    borderRadius: 12,
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e40af',
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    color: '#3b82f6',
  },
});
