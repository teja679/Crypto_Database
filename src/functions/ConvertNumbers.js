export const convertNumbers = ({ volume}) => {
    if (volume) {
        if (volume >= 1000 && volume < 1000000) {
          return (
            volume.toString().slice(0, -3) +
              "." +
              volume.toString().slice(-3, -1) +
              "K"
          );
        } else if (volume >= 1000000 && volume < 1000000000) {
          return (
            volume.toString().slice(0, -6) +
              "." +
              volume.toString().slice(-6, -4) +
              "M"
          );
        } else if (volume >= 1000000000) {
          return (
            volume.toString().slice(0, -9) +
              "." +
              volume.toString().slice(-9, -7) +
              "B"
          );
        }
      }
} 
