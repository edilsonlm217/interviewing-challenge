import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header_container: {
    height: 45,
    backgroundColor: '#ECECEC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header_label: {
    fontWeight: 'bold',
  },

  post_btn: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },

  post_title: {
    flex: 1,
    marginLeft: 5
  },
});

export default styles;