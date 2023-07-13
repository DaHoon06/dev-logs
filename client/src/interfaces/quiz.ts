export namespace Quiz {
  export interface Example {
    exampleId: string;
    answer: string;
  }

  export interface Data {
    _id: string;
    type: string;
    question: string;
    point: number;
    example: Example[];
  }

  export interface Categories {
    _id: string;
    title: string;
    thumbnail: {
      url: string;
    };
  }
}
