export class Config {
  path = '';
  buttons: [
    {
      style: string;
      href: string;
      start?: boolean;
    }
  ] = [
    {
      style: '',
      href: '',
    },
  ];
}
