/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface ProType {
  title: string;
}

class Component<T> {
  constructor (public props: T) {

  }
}

class Page extends Component<ProType> {
  pageInfo (): void {
    console.log(this.props.title);
  }
}

export {};