import ImageColors from "react-native-image-colors";

export const getImagerColor = async (uri: string) => {

  const colors = await ImageColors.getColors(uri, {})

  let primary;
  let secondary;

  switch (colors.platform) {
    case 'android':
      // android result properties
      primary = colors.dominant;
      secondary = colors.average;
      break
    case 'web':
      // web result properties
      primary = colors.dominant;
      secondary = colors.vibrant
      break
    case 'ios':
      // iOS result properties
      primary= colors.primary;
      secondary = colors.secondary
      break
    default:
      throw new Error('Unexpected platform key')
  }

  return [primary, secondary]
}