import { state } from './interface';
const initState: state = {
  physical: {
    head: {
      hair: {
        color: '#000000',
        length: 5,
        feature: 'straight'
      },
      face: {
        eye: {
          size: 10,
          color: '#000000'
        },
        nose: {},
        mouth: {},
        tooth: {},
        ear: {}
      },
      neck: {}
    },
    body: {},
    leg: {},
    foot: {}
  },
  mental: {

  },
  social: {

  }
}
export default initState