import ButtonConfig from './Button';
import ViewConfig from './View';
import TextConfig from './Text';
import PlainTextEditConfig from './TextInput';
import ImageConfig from './Image';

export type ValidWidgets = 'div' | 'p' | 'img' | 'input' | 'button';

type WidgetMap = {
  [key in ValidWidgets]: any
}

const widgetMap: WidgetMap = {
  div: new ViewConfig(),
  p: new TextConfig(),
  img: new ImageConfig(),
  input: new PlainTextEditConfig(),
  button: new ButtonConfig(),
};

const getConfigByType = (type: ValidWidgets) => {
  if (widgetMap[type] === undefined) {
    throw new Error('invalid widget type');
  }
  return widgetMap[type];
};

export default getConfigByType;
