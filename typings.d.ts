declare module 'react-native-ico-christmas' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'chocolate-1' |
      'christmas-card-1' |
      'christmas-card' |
      'list-1' |
      'list' |
      'zambomba' |
      'tambourine' |
      'chocolate' |
      'bauble-1' |
      'star-2' |
      'snow-globe' |
      'candy-cane' |
      'candle' |
      'christmas-tree-1' |
      'bauble' |
      'turron' |
      'polvoron' |
      'cookie-1' |
      'poinsettia-1' |
      'reindeer' |
      'bell-1' |
      'sleigh' |
      'cracker' |
      'tinsel' |
      'bell' |
      'king-cake' |
      'pudding' |
      'tag' |
      'north-pole' |
      'wine' |
      'champagne' |
      'poinsettia' |
      'crown' |
      'marzipan' |
      'sheet-music' |
      'market' |
      'roast-chicken' |
      'shopping-bag' |
      'star-1' |
      'drum' |
      'star' |
      'window' |
      'flower' |
      'church' |
      'grinch' |
      'bonfire' |
      'pie' |
      'snowy' |
      'cookie' |
      'peppermint' |
      'ghost' |
      'carol' |
      'branch' |
      'winter-hat' |
      'calendar' |
      'christmas-day' |
      'nutcracker' |
      'chimney' |
      'pomegranate' |
      'ice-skates' |
      'chat' |
      'robin' |
      'scarf' |
      'mittens' |
      'spices' |
      'mistletoe-1' |
      'stamp' |
      'polar-bear' |
      'gift-bag' |
      'movie' |
      'angel' |
      'thermos' |
      'kid' |
      'gift' |
      'mistletoe' |
      'car' |
      'gingerbread-house' |
      'gingerbread-man' |
      'baking' |
      'like' |
      'cider' |
      'jar' |
      'sweater' |
      'snowman' |
      'mailbox' |
      'snowflake' |
      'lollipop' |
      'book' |
      'vinyl' |
      'christmas-tree' |
      'matches' |
      'santa-claus-1' |
      'lights-1' |
      'lights' |
      'christmas-sock' |
      'fireplace' |
      'wreath' |
      'elf' |
      'mrs-claus' |
      'santa-claus';

    type iconColors = '#35611A' |
      '#4B7A2F' |
      '#619243' |
      '#6E1414' |
      '#7D2E16' |
      '#88AD72' |
      '#924630' |
      '#992A2A' |
      '#A86B5A' |
      '#BE9083' |
      '#CCC9C0' |
      '#DF3333' |
      '#E55C5C' |
      '#E8682C' |
      '#E8A44D' |
      '#E8E5DA' |
      '#EC8585' |
      '#EF7F4A' |
      '#F7B89E' |
      '#F7E4E4' |
      '#F7F5F2' |
      '#FFB3B3' |
      '#FFCB61' |
      '#FFCFBB' |
      '#FFDB92' |
      '#FFEBC2' |
      '#FFFFFF';

    type backgroundType = 'circle' | 'rect' | 'button';

    type colorsType = Record<iconColors, string>;

    type positionType = 'top' | 'bottom' | 'right' | 'left' |
      'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';

    type backgroundTypeObj = {
      type?: backgroundType;
      color?: string;
      radius?: number;
      borderRadius?: number;
    };

    type badgeTypeObj = {
      value?: number | string;
      fontSize?: string;
      position?: positionType;
      color?: string;
      colors: colorsType;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      colors: colorsType;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
