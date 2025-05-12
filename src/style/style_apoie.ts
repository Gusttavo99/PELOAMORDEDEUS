import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e6f0ff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#e6f0ff',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1e40af',
    marginBottom: 16,
    marginTop: 16,
    paddingHorizontal: 16,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2563eb',
    marginBottom: 12,
    marginTop: 24,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#dbeafe',
    borderRadius: 12,
    marginRight: 16,
    padding: 16,
    alignItems: 'center',
    ...Platform.select({
      web: {
        boxShadow: '0 3px 6px rgba(30, 64, 175, 0.2)',
      },
      default: {
        shadowColor: '#1e40af',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
      },
    }),
  },
  cardImage: {
    width: '100%',
    height: SCREEN_WIDTH * 0.35,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1e40af',
    marginBottom: 6,
    textAlign: 'center',
  },
  cardSummary: {
    fontSize: 13,
    color: '#3b82f6',
    marginBottom: 12,
    textAlign: 'center',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginHorizontal: 4,
  },
  donateButton: {
    backgroundColor: '#2563eb',
  },
  shareButton: {
    backgroundColor: '#93c5fd',
  },
  buttonText: {
    color: '#e0e7ff',
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
  },
  testimonialCard: {
    backgroundColor: '#dbeafe',
    borderRadius: 12,
    padding: 16,
    marginRight: 16,
    alignItems: 'center',
    ...Platform.select({
      web: {
        boxShadow: '0 3px 6px rgba(30, 64, 175, 0.2)',
      },
      default: {
        shadowColor: '#1e40af',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
      },
    }),
  },
  testimonialName: {
    fontWeight: '700',
    fontSize: 15,
    color: '#1e40af',
    marginBottom: 8,
    textAlign: 'center',
  },
  testimonialText: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#3b82f6',
    textAlign: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#2563eb',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 24,
    ...Platform.select({
      web: {
        boxShadow: '0 4px 8px rgba(30, 64, 175, 0.4)',
      },
      default: {
        shadowColor: '#1e40af',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 6,
      },
    }),
  },
  floatingButtonText: {
    color: '#e0e7ff',
    fontWeight: '700',
    fontSize: 17,
  },
});
