interface CharacterData {
  character: Record<string, any>;
  items: Array<Record<string, any>>;
  hasError?: boolean;
  [key: string]: any;
}
