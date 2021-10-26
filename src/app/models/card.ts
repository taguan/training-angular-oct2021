export class Card {
  public title: string | undefined;
  public description: string | undefined;
  public state: 'todo' | 'in-progress' | 'done' = 'todo';

  constructor(title: string | undefined, description: string | undefined, state: "todo" | "in-progress" | "done") {
    this.title = title;
    this.description = description;
    this.state = state;
  }
}
