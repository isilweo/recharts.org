export default {
  name: 'Legend',
  props: [
    {
      name: 'width',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The width of legend.',
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: '40',
      isOptional: false,
      desc: 'The width of legend.',
    }, {
      name: 'layout',
      type: '\'horizontal\', \'vertical\'',
      defaultVal: '\'horizontal\'',
      isOptional: false,
      desc: 'The layout of legend items.',
    }, {
      name: 'align',
      type: '\'left\', \'center\', \'right\'',
      defaultVal: '\'center\'',
      isOptional: false,
      desc: 'The alignment of legend items when the layout is \'horizontal\', which cen be \'left\', \'center\', \'right\'.',
    }, {
      name: 'verticalAlign',
      type: '\'top\', \'middle\', \'bottom\'',
      defaultVal: '\'middle\'',
      isOptional: false,
      desc: 'The alignment of legend items when the layout is \'vertical\', which can be \'top\', \'middle\', \'bottom\'.',
    }, {
      name: 'iconSize',
      type: 'Number',
      defaultVal: '14',
      isOptional: false,
      desc: 'The size of icon in each legend item.',
    }, {
      name: 'payload',
      type: 'Array',
      defaultVal: '[]',
      isOptional: false,
      desc: 'The source data of the content to be displayed in the legend, usually calculated internally.',
      format: ['[{value: \'item name\', type: \'line\', id: \'ID01\'}]'],
    }, {
      name: 'chartWidth',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The width of chart container, usually calculated internally.',
    }, {
      name: 'chartHeight',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The height of chart container, usually calculated internally.',
    }, {
      name: 'margin',
      type: 'Object',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The margin of chart container, usually calculated internally.',
      format: [`{top: 0, left: 0, right: 0, bottom: 0}`],
    }, {
      name: 'content',
      type: 'ReactElement',
      defaultVal: 'null',
      isOptional: true,
      desc: 'If set a React element, the option is the custom react element of rendering tooltip.',
      format: [`<Legend content={<CustomizedLegend external={external} />}/>`],
    }, {
      name: 'wrapperStyle',
      type: 'Object',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The style of legend container which is a "position: absolute;" div element. Because the position of legend is quite flexible, so you can change the position by the value of top, left, right, bottom in this option. And the format of wrapperStyle is the same as React inline style.',
      examples: [{
        name: 'React Inline style',
        url: 'https://facebook.github.io/react/tips/inline-styles.html',
      }],
    },
  ],
  examples: [

  ]
};
