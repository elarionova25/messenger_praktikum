import Block from '../../core/Block';

import './link.css';

interface LinkProps {
  text: string;
  to: string;
  onClick: () => void;
}

export class Link extends Block {
    static componentName = 'Link';


    constructor(props: LinkProps) {
    const onClick = (e: MouseEvent) => {
      // const router = new Router();
      // router.go(this.props.to);

      console.log(13);

      e.preventDefault();
    }

    super({...props, events: { click: onClick }});
  }

  render() {
    // language=hbs
    return `<a href="{{to}}">{{text}}</a>`;
  }
}